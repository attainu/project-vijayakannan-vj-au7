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
  //-------------------------------------user register-----------------------------

  contactUpdate: async (req, res, next) => {
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

  //-------------------------------user delete delete-------------------------------------

  userDelete: async (req, res, next) => {
    try {
      const { errors, isValid } = validateForgotPassword(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const { email } = req.body;
      //checking weather admin is present or not
      const user = await User.findOne({ email });
      if (!user) {
        errors.email = "Email doesnt not exist";
        return res.status(400).json(errors);
      }
      //deleting the admin account from bd
      await User.deleteOne({ email });
      //success message
      return res.status(200).json({ message: "Account deleted successfully" });
    } catch (err) {
      console.log("Error in Deleting the account", err.message);
      return res.status(400).json({
        message: `Error in Deleting the account ${err.message}`,
      });
    }
  },
};
