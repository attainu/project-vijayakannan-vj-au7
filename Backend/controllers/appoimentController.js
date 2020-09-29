//model
const User = require("../models/user");
const Doctor = require("../models/doctor");
const Patient = require("../models/patient");
const appo = require("../models/appoinment");

module.exports = {
  appoCheck: async (req, res, next) => {
    const dataCheck = req.body;
    console.log(datacheck);
  },
};
