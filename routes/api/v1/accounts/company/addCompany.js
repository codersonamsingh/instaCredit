const express = require("express");
const Company = require("../../../../../models/Company");
const router = express.Router();
const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/companyValidation")

//CRUD = crete Read Up date Delete

//@type POST
//@routes/api/v1/accounts/Company/addCompany
//@des crete NewCompany
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const CompanyObj = await getCompanyObj(req,"create")
console.log(CompanyObj)
     await new Company(CompanyObj)
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
//@routes/api/v1/Companys/Company/addCompany/id:
//@des crete Up dateCompany
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constCompanyObj = await getCompanyObj(req,"up date")

        constCompany = awaitCompany.findOneAndUpdate(
            {id:req.params.id},
            {$set:CompanyObj},
            {new:true}
        )
        if(!Company){
            res.status(500).json({
                message: "Company not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "Company Up dated Successfully",
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
//@route / api/v1/Companys//addCompany/deleteOne/id:
//@des DeleteCompany
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        constCompany = awaitCompany.findIdAndRemove(req.params.id);
        if(!Company){
            res.status(500).json({
                message: "Company not found",
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
    if(req.body.name) {
        newCompany.name = req.body.name
    }
    if(req.body.address) {
        newCompany.address = req.body.address
    }
    if(req.body.regNumber) {
        newCompany.regNumber = req.body.regNumber
    }
     if(req.body.ownerDetails) {
        newCompany.ownerDetails = req.body.ownerDetails
    }
     if(req.body.logoUrl) {
        newCompany.logoUrl = req.body.logoUrl
    }
    if(req.body.accessGranted) {
        newCompany.accessGranted = req.body.accessGranted
    }
    
    if(req.body.createdBy) {
        newCompany.createdBy = req.body.date
    }
    if(req.body.date) {
        newCompany.date = req.body.date
    }
     
   
    return newCompany
}
    
module.exports = router;

