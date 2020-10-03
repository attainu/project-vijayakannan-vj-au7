//File Handler
const cloudinary = require("../utils/cloudinary");

//model
const Doctor = require("../models/doctor");

//Validation
const validateImage = require("../validation/imgValidation");
const validateLeaveInput = require("../validation/leave");

//controller functions

module.exports = {
  uploadDoc: async (req, res, next) => {
    try {
      //reading the data from the body
      const { name, department, email, description } = req.body;
      //reading the image file
      const file = req.files.file;
      // const file = req.files.image;
      const errors = validateImage(file);
      if (errors != null) {
        return res.status(400).json(errors);
      }

      // uploading image to cloud
      await cloudinary.uploader.upload(
        file.tempFilePath,
        { resource_type: "image" },
        async function (err, result) {
          function generateDocId() {
            var digits = "0123456789";
            let DocId = "";
            for (let i = 0; i < 6; i++) {
              DocId += digits[Math.floor(Math.random() * 10)];
            }
            return DocId;
          }
          const DocId = await generateDocId();
          // Doctor.docid = DocId

          //Data is saved to the database with image url
          await Doctor.create({
            docid: DocId,
            name,
            department,
            email,
            description,
            imgUrl: result.secure_url,
          });
          return res
            .status(200)
            .json({ message: "Doctor detail with image uploaded Sucessfully" });
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

  //---------------------------------- Delete Doctor Detail ---------------------------------

  deleteDoc: async (req, res, next) => {
    try {
      // const { errors, isValid } = validateForgotPassword(req.body);
      // if (!isValid) {
      //   return res.status(400).json(errors);
      // }
      const { name, department } = req.body;
      //checking weather admin is present or not
      const docData = await Doctor.findOne({ name, department });
      if (!docData) {
        errors.email = "Doctor doesnt not exist";
        return res.status(400).json(errors);
      }
      //deleting the doctor account from bd
      await Doctor.deleteOne({ _id: docData._id });
      //success message
      return res
        .status(200)
        .json({ message: "Doctor Account deleted successfully" });
    } catch (err) {
      console.log("Error in Deleting the doctor account", err.message);
      return res.status(400).json({
        message: `Error in Deleting the doctor account ${err.message}`,
      });
    }
  },

  //---------------------------------- View All Doctor Detail ---------------------------------

  viewAllDoc: async (req, res, next) => {
    try {
      //checking weather doctor is present or not
      const docData = await Doctor.find({});
      if (!docData) {
        errors.email = "Doctor doesnt not exist";
        return res.status(400).json(errors);
      }
      //success message
      return res.status(200).json({ message: `Doctor Data ${[docData]}` });
    } catch (err) {
      console.log("Error in Displaying the doctor details", err.message);
      return res.status(400).json({
        message: `Error in  Displaying the doctor details ${err.message}`,
      });
    }
  },
};
