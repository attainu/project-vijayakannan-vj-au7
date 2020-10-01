const { model, Schema, ObjectId } = require("mongoose");

const appoSchema = new Schema(
  {
    appoId: {
      type: Number,
      trim: true,
      required: true,
    },
    appoDate: {
      type: String,
      required: true,
    },
    appoTimeSloat: {
      type: String,
      enum: [
        "8:00am-8:30am",
        "9:00am-9:30am",
        "11:00am-11:30am",
        "12:00pm-12:30pm",
        "1:00pm-1:30pm",
        "3:00pm-3:30pm",
        "4:00pm-4:30pm",
        "5:00pm-5:30pm",
      ],
      required: true,
    },
    paitent: {
      pname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 32,
      },
      gender: {
        type: String,
        enum: ["male", "female", "Male", "Female"],
        required: true,
      },
      dob: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      contact: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      msg: {
        type: String,
        required: true,
      },
    },
    userID: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    doctorID: {
      type: ObjectId,
      ref: "Doctor",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Appo", appoSchema);
