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

  // description: {
  //   type: String,
  //   required: true,
  // },

<<<<<<< HEAD
  // imgUrl: {
  //   type: String,
  //   required: true
  // },

=======
  imgUrl: {
    type: String,
    required: true,
  },
>>>>>>> fdff8cdeecfc342a936f5dedca97ca1a061e4d89
});

module.exports = model("doctor", doctorSchema);
