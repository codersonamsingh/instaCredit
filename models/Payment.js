const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  // here isCredit will be true when user give us the payment
  isCredit: {
    type: Boolean,
    default: true,
  },
  notes: {
    type: String,
    default: "",
  },
  document: {
    type: String,
    default: "",
  },

  paymentDate: {
    type: Date,
    default: Date.now,
  },
  approvedByAdmin: {
    type: Boolean,
    default: false,
  },
  account: {
    type: Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  //
  loan: {
    type: Schema.Types.ObjectId,
    ref: "Loan",
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "myUser",
    required: true,
  },
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: "myUser",
    required: true,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "myUser",
    required: true,
  },
  receiptNumber: {
    type: String,
    required: true,
  },
  designation: {
    type: Object,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Payment = mongoose.model("Payment", PaymentSchema);
