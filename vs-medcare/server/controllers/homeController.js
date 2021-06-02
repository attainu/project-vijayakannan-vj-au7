//model
const User = require("../models/user");
const Admin = require("../models/admin");
const Super = require("../models/superadmin");
const Doctor = require("../models/doctor");

module.exports = {
  //---------------------------- home controller-------------------------------
  userHome: async (req, res, next) => {
    try {
      const { _id } = req.user;
      const userData = await User.findOne(_id);
      console.log(userData);
      if (userData) {
        res.status(200).json({ message: userData });
      }
    } catch (err) {
      console.log("Error in user home data", err.message);
      return res
        .status(400)
        .json({ message: `Error in  user home data ${err.message}` });
    }
  },
  //---------------------------- admin home controller-------------------------------
  adminHome: async (req, res, next) => {
    try {
      const { _id } = req.user;
      const adminData = await Admin.findOne(_id);
      console.log(adminData);
      if (adminData) {
        res.status(200).json({ message: adminData });
      }
    } catch (err) {
      console.log("Error in admin home data", err.message);
      return res
        .status(400)
        .json({ message: `Error in  admin home data ${err.message}` });
    }
  },
  //---------------------------- superadmin controller-------------------------------
  superAdminHome: async (req, res, next) => {
    try {
      const { _id } = req.user;
      const superData = await Super.findOne(_id);
      console.log(superData);
      const doctorData = await Doctor.find();
      console.log(doctorData);
      const adminData = await Admin.find();
      console.log(adminData);

      if (superData && doctorData && adminData) {
        res.status(200).json({
          superData: superData,
          doctorData: doctorData,
          adminData: adminData,
        });
      }
    } catch (err) {
      console.log("Error in super admin home data", err.message);
      return res
        .status(400)
        .json({ message: `Error in  super admin home data ${err.message}` });
    }
  },
};
