const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");

//Models
const User = require("../models/user");

//Email
const { sendMailFP, sendMailRG } = require("../utils/nodemailer");

//Config
const keys = require("../config/keys");

//Validation
const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");
const validateOTP = require("../validation/otpValidation");
const validateForgotPassword = require("../validation/forgotPassword");
const validateUpdatePassword = require("../validation/updatePassword");

module.exports = {
  //-------------------------------------user register-------------------------------------------
  userRegister: async (req, res, next) => {
    try {
      //validate the form
      const { errors, isValid } = validateRegisterInput(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //checks weather the user is already exist
      const { name, email, password, contact } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        errors.email = "Email already exist";
        return res.status(400).json(errors);
      }
      //hashing the password and storing into variable
      let hashedPassword = await bcrypt.hash(password, 10);
      //default avatar is set
      const avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });
      //token generation
      const token = jwt.sign({ name, email, password }, keys.secretKey, {
        expiresIn: 120,
      });
      //sending a verfication mail using nodemailer
      await sendMailRG(req.body.email, token, "REGISTER");
      //user data
      const newUser = await new User({
        name,
        email,
        password: hashedPassword,
        contact,
        avatar,
        // confirmToken: token,
      });
      //user data is save to the database
      await newUser.save();
      res.status(200).json({
        message:
          "Please check your Email, click the link to activate your account",
      });
    } catch (err) {
      console.log("Error in userRegister", err.message);
      return res
        .status(400)
        .json({ message: `Error in userRegister ${err.message}` });
    }
  },
  //-----------------------------------user email conformation-----------------------------------
  userConfirmation: (req, res, next) => {
    try {
      const confirmToken = req.params.token;
      const { email } = jwt.verify(confirmToken, keys.secretKey);
      User.findOneAndUpdate(
        { email: email },
        { isConfirmed: true },
        (err, doc) => {
          if (err) {
            console.log("Something wrong when updating data!");
          }
          return res.status(200).json({
            message:
              "email verification Successfull now u can access your account ",
          });
        }
      );
    } catch (e) {
      console.log(e.message);
      return res.status(400).send("Email confirmation issue");
    }
  },
  //------------------------------------Resending the Token--------------------------------------
  verifyResendToken: async (req, res, next) => {
    try {
      //validate the form
      const { errors, isValid } = validateForgotPassword(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //checks weather the user is already exist
      const { email } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        errors.email = "Email not exist";
        return res.status(400).json(errors);
      }
      //token generation
      const token = jwt.sign({ email }, keys.secretKey, {
        expiresIn: 120,
      });
      //sending a verfication mail using nodemailer
      await sendMailRG(req.body.email, token, "REGISTER");
      res.status(200).json({
        message:
          "Please check your Email, click the link to activate your account",
      });
    } catch (err) {
      console.log("Error in Token Resending", err.message);
      return res
        .status(400)
        .json({ message: `Error in Token Resending ${err.message}` });
    }
  },

  //-----------------------------------------user login------------------------------------------
  userLogin: async (req, res, next) => {
    try {
      const { errors, isValid } = validateLoginInput(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const { email, password } = req.body;
      const user = await await User.findOne({ email });
      if (!user) {
        errors.email = "Email doesnt not exist";
        return res.status(400).json(errors);
      }
      // compare the password save in the database
      const isCorrect = await bcrypt.compare(password, user.password);
      if (!isCorrect) {
        errors.password = "Invalid Credentials";
        return res.status(404).json(errors);
      }
      //check weather the user is verified the mail
      if (user.isConfirmed != true) {
        return res.status(400).json({ message: "Please verify you mail" });
      }

      const payload = { id: user.id, user: user };
      jwt.sign(payload, keys.secretKey, { expiresIn: 7200 }, (err, token) => {
        res.json({
          success: true,
          token:token,
        });
      });
    } catch (err) {
      console.log("Error in userLogin", err.message);
      return res
        .status(400)
        .json({ message: `Error in userLogin ${err.message}` });
    }
  },
  //-------------------------------------forgot password-----------------------------------------
  forgotPassword: async (req, res, next) => {
    try {
      const { errors, isValid } = validateForgotPassword(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const { email } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        errors.email = "Email Not found, Provide registered email";
        return res.status(400).json(errors);
      }
      function generateOTP() {
        var digits = "0123456789";
        let OTP = "";
        for (let i = 0; i < 6; i++) {
          OTP += digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
      }
      const OTP = await generateOTP();
      user.otp = OTP;
      await user.save();
      await sendMailFP(user.email, OTP, "OTP");
      res.status(200).json({ message: "check your registered email for OTP" });
      const helper = async () => {
        user.otp = "";
        await user.save();
      };
      setTimeout(function () {
        helper();
      }, 300000);
    } catch (err) {
      console.log("Error in sending email", err.message);
      return res
        .status(400)
        .json({ message: `Error in generateOTP${err.message}` });
    }
  },

  //-------------------------------posting the otp-----------------------------------------------
  postOTP: async (req, res, next) => {
    try {
      const { errors, isValid } = validateOTP(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const { email, otp, newPassword, confirmNewPassword } = req.body;
      if (newPassword !== confirmNewPassword) {
        errors.confirmNewPassword = "Password Mismatch";
        return res.status(400).json(errors);
      }
      const user = await User.findOne({ email });

      if (user.otp === "") {
        errors.otp = "OTP has expired";
        return res.status(400).json(errors);
      }
      if (user.otp !== otp) {
        errors.otp = "Invalid OTP, check your email again";
        return res.status(400).json(errors);
      }
      let hashedPassword;
      hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();
      return res.status(200).json({ message: "Password Changed" });
    } catch (err) {
      console.log("Error in submitting otp", err.message);
      return res
        .status(400)
        .json({ message: `Error in postOTP${err.message}` });
    }
  },
  //------------------------------------- update password----------------------------------------
  updatePassword: async (req, res, next) => {
    try {
      const { errors, isValid } = validateUpdatePassword(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const { email, oldPassword, newPassword, confirmNewPassword } = req.body;
      if (newPassword !== confirmNewPassword) {
        errors.confirmNewPassword = "Password Mismatch";
        return res.status(404).json(errors);
      }
      const user = await User.findOne({ email });
      const isCorrect = await bcrypt.compare(oldPassword, user.password);
      if (!isCorrect) {
        errors.oldPassword = "Invalid old Password";
        return res.status(404).json(errors);
      }
      let hashedPassword;
      hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();
      res.status(200).json({ message: "Password Updated" });
    } catch (err) {
      console.log("Error in updating password", err.message);
      return res
        .status(400)
        .json({ message: `Error in updatePassword${err.message}` });
    }
  },

  UpdateContact: async (req, res) => {
    try{

    await User.findByIdAndUpdate(req.params.id, {$set: {contact:req.body.contact}})
      res.json('contact updated Succesfully');
    }catch(err){
      res.json({ message: err })
      // res.json("error")
    }    
  },
};
//-----------------------------------------------------------------------------------------------

