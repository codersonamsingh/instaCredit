const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LoanSchema = new Schema({
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "myUser",
  },
  // Customer Details
  customer: {
    type: Schema.Types.ObjectId,
    ref: "myUser",
    required: true,
  },
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
  panCardNumber: {
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
  // << Loan Details >>
  // Unique Number for every loan
  loanNo: {
    type: String,
    required: true,
  },

  // Status of the loan: new, in progress, approved, rejected, closed
  loanStatus: {
    type: String,
    enum: ["new", "inprogress", "approved", "rejected", "closed"],
    default: "new",
  },

  // Amount of money financed for the loan
  amountFinanced: {
    type: Number,
    required: true,
  },

  //  installment amount for the loan
  emiAmount: {
    type: Number,
    default: 0,
  },

  // Total number of installments for the loan
  totalEmi: {
    type: Number,
    default: 0,
  },

  // Frequency of installment payments: daily, weekly, monthly (default: daily)
  emiFrequency: {
    type: String,
    enum: ["daily", "weekly", "monthly"],
    default: "daily",
  },

  // Interest rate for the loan monthly
  interestRate: {
    type: Number,
    default: 0,
  },

  // Processing fee charged for the loan
  processingFee: {
    type: Number,
    default: 0,
  },

  // Start date of the loan installment
  installmentStartOn: {
    type: Date,
    default: Date.now,
  },

  // Date when the loan amount is disbursed
  disbursalDate: {
    type: Date,
    default: Date.now,
  },

  // Whether advanced EMI option is enabled (default: false)
  advanceEmi: {
    type: Number,
    default: 0,
  },
  comment: {
    type: String,
    default: "",
  },
  // End date of the loan installment
  installmentEndOn: {
    type: Date,
  },
  //<<  Reference and Guranter >>
  guarantor: {
    name: {
      type: String,
      default: "",
    },
    mobileNumber: {
      type: String,
      default: "",
    },
    mobileNumberVerified: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      default: "",
    },
  },
  reference1: {
    name: {
      type: String,
      default: "",
    },
    mobileNumber: {
      type: String,
      default: "",
    },
    mobileNumberVerified: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      default: "",
    },
  },
  reference2: {
    name: {
      type: String,
      default: "",
    },
    mobileNumber: {
      type: String,
      default: "",
    },
    mobileNumberVerified: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      default: "",
    },
  },
  // << Add any other fields you require >>
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Loan = mongoose.model("Loan", LoanSchema);
