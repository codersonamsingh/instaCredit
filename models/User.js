const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  // Basic Info
  name: {
    type: String,
    required: true,
  },

  mobileNumber: {
    type: String,
    required: true,
  },
  mobileNumberVerified: {
    type: Boolean,
    default: false,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    default: "other",
  },
  aadharCardNumber: {
    type: String,
    default: "",
  },
  dateOfBirth: {
    type: Date,
  },
  address: {
    type: String,
    default: "",
  },
  postOffice: {
    type: String,
    default: "",
  },
  block: {
    type: String,
    default: "",
  },
  village: {
    type: String,
    default: "",
  },
  district: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  pinCode: {
    type: String,
    default: "",
  },

  // Advance

  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: "",
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  occupation: {
    type: String,
    default: "",
  },

  nationality: {
    type: String,
    default: "",
  },
  maritalStatus: {
    type: String,
    enum: ["single", "married", "divorced", "widowed"],
    default: "single",
  },
  designation: {
    type: String,
    enum: ["customer", "admin", "collector", "super-admin"],
    default: "customer",
  },
  // Autocreation with backend
  user: {
    type: Schema.Types.ObjectId,
    ref: "myUser",
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("myUser", UserSchema);
