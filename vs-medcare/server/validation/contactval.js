const Validator = require("validator");
const isEmpty = require("./isEmpty");

const contactUpdateValidate = (data) => {
  let errors = {};
  data.contact = !isEmpty(data.contact) ? data.contact : "";

  if (Validator.isEmpty(data.contact)) {
    errors.contact = "Contact field is required";
  }

  if (!Validator.isLength(data.contact, { min: 10, max: 10 })) {
    errors.contact = "contact must be 10 numbers";
  }


  return {
    errors,
    isValid: isEmpty(errors),
  };
};
module.exports = contactUpdateValidate;
