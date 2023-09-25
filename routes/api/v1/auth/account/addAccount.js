const express = require("express");
constCompany = require("../../../../../Models/Accounts/Company");
const router = express.Router();
const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/companyValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/company/addCompany
//@des crete Newcompany
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const companyObj = await getCompanyObj(req,"create")
console.log(companyObj)
     await new Company(companyObj)
      .save();
      
      res.status(201).json({
        message: "Company Added",
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
//@routes/api/v1/accounts/company/addCompany/id:
//@des crete Updatecompany
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constcompanyObj = await getCompanyObj(req,"update")

        constcompany = awaitCompany.findOneAndUpdate(
            {id:req.params.id},
            {$set:CompanyObj},
            {new:true}
        )
        if(!company){
            res.status(500).json({
                message: "company not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "Company Updated Successfully",
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
//@route / api/v1/accounts//addcompany/deleteOne/id:
//@des Deletecompany
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        constcompany = awaitCompany.findIdAndRemove(req.params.id);
        if(!company){
            res.status(500).json({
                message: "company not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "Company Deleted Successfully",
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
async function getCompanyObj(req,type){
    let newCompany = {}
    if(req.body.companyName) {
        newCompany.companyName = req.body.companyName
    }
    if(req.body.IPR) {
        newCompany.IPR = req.body.IPR
    }
    if(req.body.incomeTax) {
        newCompany.incomeTax = req.body.incomeTax
    }
     if(req.body.regulator) {
        newCompany.regulator = req.body.regulator
    }
     if(req.body.gst) {
        newCompany.gst = req.body.gst
    }
    if(req.body.website) {
        newCompany.website = req.body.website
    }
    if(req.body. sourceOfFunds) {
        newCompany. sourceOfFunds = req.body. sourceOfFunds
    }
     if(req.body.openingDate) {
        newCompany.openingDate = req.body.openingDate
    }
   
    return newCompany
}
    
module.exports = router;

