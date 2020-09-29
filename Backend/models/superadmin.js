const { model, Schema } = require("mongoose");

const superAdminSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "superadmin",
  },
});

module.exports = model("superadmin", superAdminSchema);
