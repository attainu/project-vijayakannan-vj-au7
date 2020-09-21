import { model, Schema } from "mongoose";

const adminSchema = new Schema({
  adminname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default new model("admin", adminSchema);
