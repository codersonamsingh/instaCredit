const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    default: "",
  },
  document: {
    type: String,
    default: "",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "myUser",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Account =mongoose.model("account", AccountSchema);
