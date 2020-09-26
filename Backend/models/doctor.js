const { model, Schema } = require("mongoose");

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },

  desc: {
    type: String,
    required: true,
  },

  imgUrl: {
    type: String,
    required: true,
  },
});

module.exports = model("doctor", doctorSchema);
