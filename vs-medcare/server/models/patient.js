const { model, Schema } = require("mongoose");

const patientSchema = new Schema({
  pname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 32,
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
  gender: {
    type: String,
    enum: ["male", "female", "Male", "Female"],
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
});

module.exports = model("patient", patientSchema);
