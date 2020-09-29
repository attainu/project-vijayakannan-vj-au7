//File Handler
const cloudinary = require("../utils/cloudinary");

//model
const Doctor = require("../models/doctor");

//Validation
//const validateLeaveInput = require("../validation/leave");

module.exports = {
  uploadDoc: async (req, res, next) => {
    try {
      //reading the data from the body
      const { name, department, email, description } = req.body;
      //reading the image file
      const file = req.files.image;
      //console.log(file);
      cloudinary.uploader.upload(
        file.tempFilePath,
        { resource_type: "image" },
        async function (err, result) {
          //console.log(result);
          //Data is saved to the database with image url
          const newDoc = await Doctor.create({
            name,
            department,
            email,
            description,
            imgUrl: result.secure_url,
          });
          return res.status(200).json({ message: `${newDoc}` });
        }
      );
    } catch (err) {
      console.log("Error in uploadPost", err.message);
      return res
        .status(400)
        .json({ message: `Error in uploadPost ${err.message}` });
    }
  },

  //---------------------------------Doctor Leave------------------------------------------

  leaveDoc: async (req, res, next) => {
    try {
      //validate the form
      const { errors, isValid } = validateLeaveInput(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const { name, department, date } = req.body;
      //find the doctor by using name and department thn update leave
      const docData = await Doctor.findOne({ name, department });
      // checking weather already marked leave or not
      var flag = 0;
      for (i = 0; i < docData.leave.length; i++) {
        if (docData.leave[i] == date) {
          flag = flag + 1;
        }
      }
      // updating the leave date in doctor
      if (flag == 0) {
        await Doctor.findOneAndUpdate(
          { name, department },
          { $push: { leave: req.body.date } }
        );
      } else {
        return res.status(400).json({ message: "already Leave Marked" });
      }
      A;
      //success message
      res.status(200).json({
        message: "Leave marked successfully",
      });
    } catch (err) {
      console.log("Error in marking leave", err.message);
      return res
        .status(400)
        .json({ message: `Error in marking leave ${err.message}` });
    }
  },

  //-------------------------------- Doctor Leave cancle ----------------------------------

  leaveDocCancel: async (req, res, next) => {
    try {
      //validate the form
      const { errors, isValid } = validateLeaveInput(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const { name, department, date } = req.body;
      //find the doctor by using name and department thn update leave
      await Doctor.findOneAndUpdate(
        { name, department },
        { $pullAll: { leave: [date] } }
      );
      //success message
      res.status(200).json({
        message: "Leave cancelled successfully",
      });
    } catch (err) {
      console.log("Error in cancelling leave", err.message);
      return res
        .status(400)
        .json({ message: `Error in cancelling leave ${err.message}` });
    }
  },
};
