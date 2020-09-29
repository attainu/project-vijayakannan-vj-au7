const { model, Schema } = require("mongoose");

const appoSchema = new Schema({
  appoDate: {
    type: String,
    required: true,
  },
  appoTimeSloat: {
    type: String,
    required: true,
  },
});

module.exports = model("appo", appoSchema);
