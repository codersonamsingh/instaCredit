const express = require("express");
const Loan = require("../../../../../Models/Loan");
const router = express.Router();
const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/loanValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/Loans/Loan/addLoan
//@des crete NewLoan
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const LoanObj = await getLoanObj(req,"create")
console.log(LoanObj)
     await new Loan(LoanObj)
      .save();
      
      res.status(201).json({
        message: "Loan Added",
        varient : "success"
      })

    } catch(error){
        console.log(error)
        res.status(500).json({
        message: "Internal Server error",
        varient : "error"
      })
    }
    

}

)
//@type POST
//@routes/api/v1/Loans/Loan/addLoan/id:
//@des crete UpdateLoan
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constLoanObj = await getLoanObj(req,"update")

        constLoan = awaitLoan.findOneAndUpdate(
            {id:req.params.id},
            {$set:LoanObj},
            {new:true}
        )
        if(!Loan){
            res.status(500).json({
                message: "Loan not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "Loan Updated Successfully",
            varient : "error"
          })
     

    } catch(error){
        console.log(error)
        res.status(500).json({
        message: "Internal server error",
        varient : "error"
      })
    }
    
})

//@type Delete
//@route / api/v1/Loans//addLoan/deleteOne/id:
//@des DeleteLoan
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        constLoan = awaitLoan.findIdAndRemove(req.params.id);
        if(!Loan){
            res.status(500).json({
                message: "Loan not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "Loan Deleted Successfully",
            varient : "error"
          })
     

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message: "Internal Server error",
            varient : "error"
          })
     

    }
    })
async function getLoanObj(req,type){
    let newLoan = {}
    if(req.body.company) {
        newLoan.company = req.body.company
    }
    if(req.body.user) {
        newLoan.user = req.body.user
    }
    if(req.body.customer) {
        newLoan.customer = req.body.customer
    }
     if(req.body.name) {
        newLoan.name = req.body.name
    }
     if(req.body.mobileNumber) {
        newLoan.mobileNumber = req.body.mobileNumber
    }
    if(req.body.mobileNumberVerified) {
        newLoan.mobileNumberVerified = req.body.mobileNumberVerified
    }
    if(req.body.gender) {
        newLoan.gender = req.body. gender
    }
    if(req.body.aadharCardNumber) {
        newLoan.aadharCardNumber = req.body.aadharCardNumber
    }
    if(req.body.panCardNumber) {
        newLoan.panCardNumber = req.body.panCardNumber
    }
    if(req.body.dateOfBirth) {
        newLoan.dateOfBirth = req.body.dateOfBirth
    }
    if(req.body.address) {
        newLoan.address = req.body.address
    }
    if(req.body.postOffice) {
        newLoan.postOffice = req.body.postOffice
    }
    if(req.body.block) {
        newLoan.block = req.body.block
    }
    if(req.body.village) {
        newLoan.village = req.body.village
    }
    if(req.body.district) {
        newLoan.district = req.body.district
    }
    if(req.body.state) {
        newLoan.state = req.body.state
    }
    if(req.body.pinCode) {
        newLoan.pinCode = req.body.pinCode
    }
    if(req.body.loanNo) {
        newLoan.loanNo = req.body.loanNo
    }
    if(req.body.loanStatus) {
        newLoan.loanStatus= req.body.loanStatus
    }
    if(req.body.amountFinanced) {
        newLoan.amountFinanced = req.body.amountFinanced
    }
    if(req.body.emiAmount) {
        newLoan.emiAmount = req.body.emiAmount
    }
    if(req.body.totalEmi) {
        newLoan.totalEmi = req.body.totalEmi   
    }
    if(req.body.emiFrequency) {
        newLoan.emiFrequency = req.body.interestRate
    }
    if(req.body.interestRate) {
        newLoan.interestRate = req.body.interestRate
    }
    if(req.body.processingFee) {
        newLoan.processingFee = req.body.processingFee
    }
    if(req.body.installmentStartOn) {
        newLoan.installmentStartOn = req.body.installmentStartOn
    }
    if(req.body.disbursalDate) {
        newLoan.disbursalDate = req.body.disbursalDate
    }
    if(req.body.advanceEmi) {
        newLoan.advanceEmi = req.body.advanceEmi
    }
    if(req.body.comment) {
        newLoan.comment= req.body.comment
    }
    if(req.body.installmentEndOn) {
        newLoan.installmentEndOn = req.body.installmentEndOn
    }
    if(req.body.guarantor) {
        newLoan.guarantor = req.body.guarantor
    }
    if(req.body.mobileNumber) {
        newLoan.mobileNumber = req.body.mobileNumber
    }
    if(req.body.mobileNumberVerified) {
        newLoan.mobileNumberVerified = req.body.mobileNumberVerified
    }
    if(req.body.address) {
        newLoan.address = req.body.address
    }
    if(req.body.reference2) {
        newLoan.reference2 = req.body.reference2
    }if(req.body.mobileNumber) {
        newLoan.mobileNumber= req.body.mobileNumber
    }
    if(req.body.mobileNumberVerified) {
        newLoan.mobileNumberVerified = req.body.mobileNumberVerified
    }
    if(req.body.date) {
        newLoan.date = req.body.address
    }
    
     
   
    return newLoan
}
    
module.exports = router;

