const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Models
const superAdmin = require("../models/superadmin");

//Config
const keys = require("../config/keys");

//Validation
const validateLoginInput = require("../validation/login");

module.exports = {
  //----------------------------super superadmin login-------------------------------
  superAdminLogin: async (req, res, next) => {
    try {
      const { errors, isValid } = validateLoginInput(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const { email, password } = req.body;
      const superadmin = await superAdmin.findOne({ email });
      console.log(superadmin);
      if (!superadmin) {
        errors.email = "Email doesnt not exist";
        return res.status(400).json(errors);
      }
      // compare the password save in the database
      const isCorrect = await bcrypt.compare(password, superadmin.password);
      if (!isCorrect) {
        errors.password = "Invalid Credentials";
        return res.status(404).json(errors);
      }

      const payload = { id: superadmin.id, superadmin: superadmin };
      jwt.sign(payload, keys.secretKey, { expiresIn: 7200 }, (err, token) => {
        res.json({
          success: true,
          token: token,
        });
      });
    } catch (err) {
      console.log("Error in userLogin", err.message);
      return res
        .status(400)
        .json({ message: `Error in userLogin ${err.message}` });
    }
  },
};

//-------------------------------------------------------------------------
