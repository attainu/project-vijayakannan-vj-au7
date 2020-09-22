//Email
const { sendMailFB } = require("../utils/nodemailer");

//Validation
const validateFeedbackInput = require("../validation/feedback");

module.exports = {
  //feedback in contact form
  feedback: async (req, res, next) => {
    try {
      const { errors, isValid } = validateFeedbackInput(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }

      const feedback = req.body;

      await sendMailFB(feedback, "FEEDBACK");
      res
        .status(200)
        .json({ message: "Your Feedback Message Sent Successfully." });
    } catch (err) {
      console.log("Error in sending feedback message", err.message);
      return res
        .status(400)
        .json({ message: `Error in  sending feedback message ${err.message}` });
    }
  },
};
