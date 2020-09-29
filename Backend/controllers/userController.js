//user account delete
//user contact update

//Models
const User = require("../models/user");

//Email
const {} = require("../utils/userNodemailer");

//Validation
const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");
const validateOTP = require("../validation/otpValidation");
const validateForgotPassword = require("../validation/forgotPassword");
const validateUpdatePassword = require("../validation/updatePassword");

module.exports = {
<<<<<<< HEAD
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
=======
  //-------------------------------------user register-----------------------------

  contactUpdate: async (req, res, next) => {
>>>>>>> e911c489d2cb54a7bdd2ac1cdd75be9468f174c7
    try {
      //validate the form
      //   const { errors, isValid } = validateRegisterInput(req.body);
      //   if (!isValid) {
      //     return res.status(400).json(errors);
      //   }

      const { contact } = req.body;

      await User.findOneAndUpdate(req.user.email, {
        contact: contact,
      });
      return res
        .status(200)
        .json({ message: "Contact number updated successfully" });
    } catch (err) {
      console.log("Error in updating contact number", err.message);
      return res
        .status(400)
        .json({ message: `Error in updating contact number ${err.message}` });
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
<<<<<<< HEAD
//-----------------------------------------------------------------------------------------------

=======

//-------------------------------------------------------------------------------
>>>>>>> e911c489d2cb54a7bdd2ac1cdd75be9468f174c7
