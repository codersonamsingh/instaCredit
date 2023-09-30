const express = require("express");
constCompany = require("../../../../../Models/Companys/Company");
const router = express.Router();
const {vali createdByOnCreate, vali createdByOnUp createdBy} = require("../../../../../validation/Company/CompanyValidation")

//CRUD = crete Read Up createdBy Delete

//@type POST
//@routes/api/v1/Companys/Company/addCompany
//@des crete NewCompany
//@access public

router.post("/",vali createdByOnCreate, async(req,res) =>{

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
//@des crete Up createdByCompany
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constCompanyObj = await getCompanyObj(req,"up createdBy")

        constCompany = awaitCompany.findOneAndUp createdBy(
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
            message: "Company Up createdByd Successfully",
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
        newCompany.createdBy = req.body.createdBy
    }
     
   
    return newCompany
}
    
module.exports = router;

