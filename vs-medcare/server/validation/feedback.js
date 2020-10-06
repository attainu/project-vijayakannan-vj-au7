const Validator = require("validator");
const isEmpty = require("./isEmpty");

const validateFeedbackInput = (data) => {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.feedback = !isEmpty(data.feedback) ? data.feedback : "";

  if (!Validator.isLength(data.name, { min: 3, max: 30 })) {
    errors.name = "Name must be between 3 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isLength(data.feedback, { min: 10, max: 500 })) {
    errors.feedback = "Message is invalid";
  }

  if (Validator.isEmpty(data.feedback)) {
    errors.feedback = "Message is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateFeedbackInput;
