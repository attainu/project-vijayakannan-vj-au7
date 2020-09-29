const { model, Schema } = require("mongoose");

const patientSchema = new Schema({
  name: {
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
});

module.exports = model("patient", patientSchema);
