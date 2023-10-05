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
    if(req.body. gender) {
        newaccount. gender = req.body. gender
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
    if(req.body. gender) {
        newaccount. gender = req.body. gender
    }
    if(req.body. gender) {
        newaccount. gender = req.body. gender
    }
    if(req.body. gender) {
        newaccount. gender = req.body. gender
    }
    if(req.body. gender) {
        newaccount. gender = req.body. gender
    }
    if(req.body. gender) {
        newaccount. gender = req.body. gender
    }
    if(req.body. gender) {
        newaccount. gender = req.body. gender
    }if(req.body. gender) {
        newaccount. gender = req.body. gender
    }
    if(req.body. gender) {
        newaccount. gender = req.body. gender
    }if(req.body. gender) {
        newaccount. gender = req.body. gender
    }
    if(req.body. gender) {
        newaccount. gender = req.body. gender
    }
    if(req.body. gender) {
        newaccount. gender = req.body. gender
    }if(req.body. gender) {
        newaccount. gender = req.body. gender
    }if(req.body. gender) {
        newaccount. gender = req.body. gender
    }
    if(req.body. gender) {
        newaccount. gender = req.body. gender
    }
    if(req.body. date) {
        newaccount. date = req.body. date
    }
     
   
    return newaccount
}
    
module.exports = router;
