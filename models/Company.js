const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    default: "",
  },
  regNumber: {
    type: String,
    default: "",
  },
  ownerDetails: {
    name: { type: String, default: "" },
    mobileNumber: { type: String },
    address: { type: String },
  },

  logoUrl: {
    type: String,
  },
  accessGranted: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "myUser",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Company = mongoose.model("Company", CompanySchema);
