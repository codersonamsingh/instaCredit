const express = require("express");
constaccount = require("../../../../../Models/Accounts/account");
const router = express.Router();
const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/accountValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/account/addaccount
//@des crete Newaccount
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const accountObj = await getaccountObj(req,"create")
console.log(accountObj)
     await new account(accountObj)
      .save();
      
      res.status(201).json({
        message: "account Added",
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
//@routes/api/v1/accounts/account/addaccount/id:
//@des crete Updateaccount
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constaccountObj = await getaccountObj(req,"update")

        constaccount = awaitaccount.findOneAndUpdate(
            {id:req.params.id},
            {$set:accountObj},
            {new:true}
        )
        if(!account){
            res.status(500).json({
                message: "account not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "account Updated Successfully",
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
//@route / api/v1/accounts//addaccount/deleteOne/id:
//@des Deleteaccount
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        constaccount = awaitaccount.findIdAndRemove(req.params.id);
        if(!account){
            res.status(500).json({
                message: "account not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "account Deleted Successfully",
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
async function getaccountObj(req,type){
    let newaccount = {}
    if(req.body.company) {
        newaccount.company = req.body.company
    }
    if(req.body.user) {
        newaccount.user = req.body.user
    }
    if(req.body.customer) {
        newaccount.customer = req.body.customer
    }
     if(req.body.name) {
        newaccount.name = req.body.name
    }
     if(req.body.mobileNumber) {
        newaccount.mobileNumber = req.body.mobileNumber
    }
    if(req.body.mobileNumberVerified) {
        newaccount.mobileNumberVerified = req.body.mobileNumberVerified
    }
    if(req.body.gender) {
        newaccount. gender = req.body. gender
    }
    if(req.body.aadharCardNumber) {
        newaccount.aadharCardNumber = req.body.aadharCardNumber
    }
    if(req.body.panCardNumber) {
        newaccount.panCardNumber = req.body.panCardNumber
    }
    if(req.body.dateOfBirth) {
        newaccount.dateOfBirth = req.body.dateOfBirth
    }
    if(req.body.address) {
        newaccount.address = req.body.address
    }
    if(req.body.postOffice) {
        newaccount.postOffice = req.body.postOffice
    }
    if(req.body.block) {
        newaccount.block = req.body.block
    }
    if(req.body.village) {
        newaccount.village = req.body.village
    }
    if(req.body.district) {
        newaccount.district = req.body.district
    }
    if(req.body.state) {
        newaccount.state = req.body.state
    }
    if(req.body.pinCode) {
        newaccount.pinCode = req.body.pinCode
    }
    if(req.body.loanNo) {
        newaccount.loanNo = req.body.loanNo
    }
    if(req.body.loanStatus) {
        newaccount.loanStatus= req.body.loanStatus
    }
    if(req.body.amountFinanced) {
        newaccount.amountFinanced = req.body.amountFinanced
    }
    if(req.body.emiAmount) {
        newaccount.emiAmount = req.body.emiAmount
    }
    if(req.body.totalEmi) {
        newaccount.totalEmi = req.body.totalEmi   
    }
    if(req.body.emiFrequency) {
        newaccount.emiFrequency = req.body.interestRate
    }
    if(req.body.interestRate) {
        newaccount.interestRate = req.body.interestRate
    }
    if(req.body.processingFee) {
        newaccount.processingFee = req.body.processingFee
    }
    if(req.body.installmentStartOn) {
        newaccount.installmentStartOn = req.body.installmentStartOn
    }
    if(req.body.disbursalDate) {
        newaccount.disbursalDate = req.body.disbursalDate
    }
    if(req.body.advanceEmi) {
        newaccount.advanceEmi = req.body.advanceEmi
    }
    if(req.body.comment) {
        newaccount.comment= req.body.comment
    }
    if(req.body.installmentEndOn) {
        newaccount.installmentEndOn = req.body.installmentEndOn
    }
    if(req.body.guarantor) {
        newaccount.guarantor = req.body.guarantor
    }
    if(req.body.mobileNumber) {
        newaccount.mobileNumber = req.body.mobileNumber
    }
    if(req.body.mobileNumberVerified) {
        newaccount.mobileNumberVerified = req.body.mobileNumberVerified
    }
    if(req.body.address) {
        newaccount.address = req.body.address
    }
    if(req.body.reference2) {
        newaccount.reference2 = req.body.reference2
    }if(req.body.mobileNumber) {
        newaccount.mobileNumber= req.body.address
    }if(req.body.address) {
        newaccount.address = req.body.address
    }if(req.body.address) {
        newaccount.address = req.body.address
    }if(req.body.address) {
        newaccount.address = req.body.address
    }if(req.body.address) {
        newaccount.address = req.body.address
    }
    
     
   
    return newaccount
}
    
module.exports = router;

