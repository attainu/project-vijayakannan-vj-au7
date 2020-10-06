//model
const Doctor = require("../models/doctor");
const Appo = require("../models/appoinment");

//validation
const validateAppoBooking = require("../validation/appovalidation");
// nodemailer
const sendMailAP = require('../utils/appoNodmailer');

module.exports = {
  appoCheck: async (req, res, next) => {
    try {
      const { department, name, appoDate, appoTimeSloat } = req.body;
      //find the doctor by using name and department thn update leave
      const docData = await Doctor.findOne({ department, name });
      if (!docData) {
        return res.status(400).json({ message: "No such doctor found" });
      }
      // checking weather doctor is on leave or not
      docData.leave.map((date) => {
        if (date == appoDate) {
          return res
            .status(400)
            .json({ message: `Doctor not available on : ${appoDate}` });
        }
      });
      // checking weather date is available or not
      const appoFind = await Appo.find({
        doctorID: docData._id,
        appoDate: appoDate,
      });

      if (!appoFind) {
        return res
          .status(200)
          .json({ message: "Carry on ur Appoinment Booking" });
      }
      // checking weather all the slots are filled for date
      if (appoFind.length == 8) {
        return res
          .status(400)
          .json({ message: "No sloat avaiable for the given date" });
      }
      // checking weather all the slots are filled for date
      if (appoFind.length < 8) {
        return res
          .status(400)
          .json({ message: "Try another sloat for the given date" });
      }
      //checking weather the give time sloat is avaible or not
      appoFind.map((timeSloat) => {
        if (timeSloat.appoTimeSloat == appoTimeSloat) {
          return res.status(400).json({ message: "No sloat available" });
        }
      });
      //succes return
      return res
        .status(400)
        .json({ message: `Carry on ur Appoinment Booking` });
    } catch (err) {
      console.log("Error in checking appoDate and appoSloat", err.message);
      return res
        .status(400)
        .json({ message: `Error in appoDate and appoSloat ${err.message}` });
    }
  },

  //-----------------------------------------------------------------------------------------

  appoBook: async (req, res, next) => {
    try {
      const { errors, isValid } = validateAppoBooking(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }

      const userID = req.user._id;
      const {
        pname,
        gender,
        dob,
        email,
        contact,
        msg,
        department,
        name,
        appoDate,
        appoTimeSloat,
      } = req.body;
      //find the doctor by using name and department thn update leave
      const docData = await Doctor.findOne({ name, department });
      //save data
      function generateAppoId() {
        var digits = "0123456789";
        let appoId = "";
        for (let i = 0; i < 6; i++) {
          appoId += digits[Math.floor(Math.random() * 10)];
        }
        return appoId;
      }
      const AppoId = await generateAppoId();
      
     const appoData =  await Appo.create({
        appoId: AppoId,
        appoDate: appoDate,
        appoTimeSloat: appoTimeSloat,
        doctorID: docData._id,
        paitent: {
          pname: pname,
          gender: gender,
          dob: dob,
          email: email,
          contact: contact,
          msg: msg,
        },
        userID: userID,
      });
  // sending mail to user
  await sendMailAP(req.user.email, appoData,docData, "APPOINTMENT");


      return res
        .status(200)
        .json({ message: "Appoinment Booked Successfully" });
    } catch (err) {
      console.log("Error in adding Paitent Detail", err.message);
      return res
        .status(400)
        .json({ message: `Error in adding Paitent Detail ${err.message}` });
    }
  },

  //------------------------------------------------------------------------------------------

  appoCancel: async (req, res, next) => {
    try {
      const { appoId } = req.body;
      //finding the appo detail using the appoinment id.
      const appoData = await Appo.findOne({ appoId });
      if (!appoData) {
        return res
          .status(400)
          .json({ message: "No record found for given Appoinment ID" });
      } else {
        await Appo.deleteOne({ appoId });
      }
      return res
        .status(200)
        .json({ message: "Appoinment Cancelled Successfully" });
    } catch (err) {
      console.log("Error in Cancelling appoinment", err.message);
      return res
        .status(400)
        .json({ message: `Error in Cancelling appoinment" ${err.message}` });
    }
  },

  //------------------------------------view the appoinment-----------------------------

  appoView: async (req, res, next) => {
    try {
      const { _id } = req.body;
      //finding the appo detail using the appoinment id.
      const appoData = await Appo.find({ userID: _id });

      if (!appoData) {
        return res.status(400).json({ message: "No Appoinment record found" });
      }
      // success message
      return res.status(200).json({
        message: [appoData],
      });
    } catch (err) {
      console.log("Error in Viewing appoinment", err.message);
      return res
        .status(400)
        .json({ message: `"Error in Viewing appoinment" ${err.message}` });
    }
  },

  //------------------------------- Admin view appoinment -----------------------------------

  appoAdminView: async (req, res, next) => {
    try {
      const  { department } = req.user;
      const { name } = req.body;

      // fething doctor detail using name and department(admin)
      const docData = await Doctor.find({ name, department });
      // cheking wheather doc data is empty or not
      if(!docData){
        return res.status(400).json({ message: "Doctor Acess Denied" });
      }
      // getting doctor id
      const docID = docData[0]._id;
      
    //finding the appo detail using the doctor id.
      const appoData = await Appo.find({ 
      doctorID : docID
      });
    
      if (!appoData) {
        return res.status(400).json({ message: "No Appoinment record found" });
      }
      // success message
      return res.status(200).json({
        message:  [appoData],
      });
    } catch (err) {
      console.log("Error in Viewing appoinment", err.message);
      return res
        .status(400)
        .json({ message: `"Error in Viewing appoinment" ${err.message}` });
    }
  },
};
