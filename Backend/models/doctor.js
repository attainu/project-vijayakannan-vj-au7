const { model, Schema } = require("mongoose");

const doctorSchema = new Schema({
  docid: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 32,
  },
<<<<<<< HEAD
  
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },

  description: {
=======
  department: {
>>>>>>> e911c489d2cb54a7bdd2ac1cdd75be9468f174c7
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  leave: {
    type: Array,
    default: [],
  },
  imgUrl: {
    type: String,
    required: true
  },

});

module.exports = model("doctor", doctorSchema);
