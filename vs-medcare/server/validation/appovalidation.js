const Validator = require("validator");
const isEmpty = require("./isEmpty");

const validateAppoBooking = (data) => {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.pname = !isEmpty(data.pname) ? data.pname : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.dob= !isEmpty(data.dob) ? data.dob : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.contact = !isEmpty(data.contact) ? data.contact : "";
  data.msg = !isEmpty(data.msg) ? data.msg : "";
  data.department = !isEmpty(data.department) ? data.department : "";
  data.appoDate = !isEmpty(data.appoDate) ? data.appoDate : "";
  data.appoTimeSloat = !isEmpty(data.appoTimeSloat) ? data.appoTimeSloat : "";

  if (!Validator.isLength(data.name, { min: 3, max: 30 })) {
    errors.name = "Name must be between 3 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!Validator.isLength(data.pname, { min: 3, max: 30 })) {
    errors.pname = "Patient Name must be between 3 and 30 characters";
  }

  if (Validator.isEmpty(data.pname)) {
    errors.pname = "Patient Name field is required";
  }

  if (Validator.isEmpty(data.contact)) {
    errors.contact = "Contact field is required";
  }

  if (!Validator.isLength(data.contact, { min: 10, max: 10 })) {
    errors.contact = "contact must be 10 numbers";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is required";
  }

  if (Validator.isEmpty(data.dob)) {
    errors.dob = "DOB field is required";
  }

  if (Validator.isEmpty(data.msg)) {
    errors.msg = "MSG field is required";
  }

  if (Validator.isEmpty(data.department)) {
    errors.department= "Department field is required";
  }

  if (Validator.isEmpty(data.appoDate)) {
    errors.appoDate= "Department field is required";
  }

  if (Validator.isEmpty(data.appoTimeSloat)) {
    errors.appoTimeSloat= "Department field is required";
  }
 
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
module.exports = validateAppoBooking;
