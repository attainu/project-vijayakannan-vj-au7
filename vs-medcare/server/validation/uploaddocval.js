const Validator = require("validator");
const isEmpty = require("./isEmpty");

const validateuploadDoc = (data) => {
  let error = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.department = !isEmpty(data.department) ? data.department : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  
  if (!Validator.isLength(data.name, { min: 3, max: 30 })) {
    error.name = "Name must be between 3 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    error.name = "Name field is required";
  }

  if (!Validator.isEmail(data.email)) {
    error.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    error.email = "Email field is required";
  }

  if (Validator.isEmpty(data.department)) {
    error.department = "Department field is required";
  }

  if (Validator.isEmpty(data.description)) {
    error.description = "Description field is required";
  }

 
  return {
    error,
    isValid: isEmpty(error),
  };
};
module.exports = validateuploadDoc;

