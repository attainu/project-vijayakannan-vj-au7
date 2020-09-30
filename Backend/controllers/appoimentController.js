//model
const User = require("../models/user");
const Doctor = require("../models/doctor");
const appo = require("../models/appoinment");

module.exports = {
  appoCheck: async (req, res, next) => {
    const dataCheck = req.body;
    console.log(dataCheck);
  },
  appoBook: async (req, res, next) => {
    const dataCheck = req.body;
    console.log(datacheck);
  },
  appoCancel: async (req, res, next) => {
    const dataCheck = req.body;
    console.log(datacheck);
  },
};
