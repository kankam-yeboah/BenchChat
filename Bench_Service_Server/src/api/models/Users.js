import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    min: 3,
    max: 256,
  },
  phonenumber: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    max: 256,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 256,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => new Date(),
  },
  contacts: [{ contactEmail: String, contactPhonenumber: Number, contactName: String }],
});

export default model("users", userSchema);
