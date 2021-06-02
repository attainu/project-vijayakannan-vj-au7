const Validator = require("validator");
const isEmpty = require("./isEmpty");

const validateLeaveInput = (data) => {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.department = !isEmpty(data.department) ? data.department : "";
  data.date = !isEmpty(data.date) ? data.date : "";

  if (!Validator.isLength(data.name, { min: 3, max: 32 })) {
    errors.name = "Name must be between 3 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.department)) {
    errors.department = "Department field is required";
  }

  if (Validator.isEmpty(data.date)) {
    errors.date = "Date is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateLeaveInput;
