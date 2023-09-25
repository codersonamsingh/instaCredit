const express = require("express");
const router = express.Router();
const jsonwt = require("jsonwebtoken");
const key = require("../../../../setup/myurl");
const jwt_decode = require("jwt-decode");
const User = require("../../../../models/User");
const axios = require("axios");

// /api/v1/auth/otpAuth/sendOtp
router.post("/sendOtp", (req, res) => {
  let mobileNumber = req.body.mobileNumber;

  if (req.body.mobileNumber && mobileNumber?.length == 10) {
    if (mobileNumber == "9460117600") {
      res.status(200).json({
        message: "use OTP 1122 for testing",
        variant: "success",
      });
    } else {
      User.findOne({ mobileNumber: mobileNumber }).then((user) => {
        if (user) {
          sendOtp(req, res, mobileNumber);
        } else {
          res.status(500).json({
            message: "User not register",
            variant: "error",
          });
        }
      });
    }
  } else {
    res.status(500).json({
      message: "Imvalid Mobile number or Length",
      variant: "error",
    });
  }
});

let sendOtp = (req, res, mobileNumber) => {
  const auKey = process.env.AUTH_KEY;
  const t = process.env.TEMP1;
  axios
    .post(
      `https://api.msg91.com/api/v5/otp?invisible=1&authkey=${auKey}&mobile=${mobileNumber}&template_id=${t}`
    )

    .then((rest) => {
      if (rest.data.type == "success") {
        res.status(200).json({
          message: "OTP sent",
          variant: "success",
        });
      } else {
        res.status(500).json({
          message: "Something went wrong",
          variant: "error",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
        variant: "error",
      });
    });
};

// Route to check otp and register/login user
// /api/v1/auth/otpAuth/check

router.post("/login", async (req, res) => {
  if (req.body.mobileNumber && req.body.otp) {
    const auKey = process.env.AUTH_KEY;
    let mobileNumber = req.body.mobileNumber;
    let otp = req.body.otp;
    // if (otp === "1122") {
    //   checkIfReg(req, res, mobileNumber);
    // }
    //  else if(otp != "2244"){
    //   res.json({
    //     message: "OTP not match",
    //     variant: "error"
    //   })
    //  }
    // else {
    axios
      .post(
        `https://api.msg91.com/api/v5/otp/verify?otp=${otp}&authkey=${auKey}&mobile=${mobileNumber}`
      )

      .then((rest) => {
        if (
          rest.data.type == "success" ||
          rest.data.message == "Mobile no. already verified"
        ) {
          checkIfReg(req, res, mobileNumber);
        } else {
          res.status(500).json({
            message: "OTP not match",
            variant: "error",
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something went wrong",
          variant: "error",
        });
      });
    // }
  } else {
    res.status(500).json({
      message: "imp field is missing",
      variant: "error",
    });
  }
});

let checkIfReg = (req, res, mobileNumber) => {
  User.findOne({ mobileNumber: mobileNumber })
    .populate("company")
    .then((user) => {
      if (user) {
        loginUser(req, res, user);
      } else {
        res.status(500).json({
          message: "User not register",
          variant: "error",
        });
      }
    });
};

let loginUser = (req, res, user) => {
  const payload = {
    id: user._id,
    designation: user.designation,
    mobileNumber: user.mobileNumber,
    name: user.name,
    companyId: user.company._id,
    companyName: user.company.name,
    companyLogoUrl: user.company.logoUrl,
  };
  jsonwt.sign(payload, key.secret, (err, token) => {
    let obj = {
      success: true,
      token: "Bearer " + token,
      id: user._id,
      // isPaid:isPaid,
      message: "login success",
      variant: "success",
      designation: user.designation,
      mobileNumber: user.mobileNumber,
      name: user.name,
      companyId: user.company._id,
      companyName: user.company.name,
      companyLogoUrl: user.company.logoUrl,
    };
    res.status(200).json(obj);
    const decoded = jwt_decode(token);
  });
};

module.exports = router;
