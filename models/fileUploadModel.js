import { Schema, model } from "mongoose";

const fileUploadSchema = Schema({
  filename: String,
  type: String,
  size: Number,
  path: String,
});

export default model("FileUpload", fileUploadSchema);
