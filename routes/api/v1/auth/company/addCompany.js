const express = require("express");
constCompany = require("../../../../../Models/Companys/Company");
const router = express.Router();
const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/Company/CompanyValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/Companys/Company/addCompany
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
//@des crete UpdateCompany
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constCompanyObj = await getCompanyObj(req,"update")

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
        newCompany.name = req.body.Company
    }
    if(req.body.label) {
        newCompany.label = req.body.label
    }
    if(req.body.link) {
        newCompany.link = req.body.link
    }
     if(req.body.notes) {
        newCompany.notes = req.body.notes
    }
     if(req.body.document) {
        newCompany.document = req.body.document
    }
    if(req.body.user) {
        newCompany.user = req.body.user
    }
    if(req.body. date) {
        newCompany. date = req.body. date
    }
     
   
    return newCompany
}
    
module.exports = router;

