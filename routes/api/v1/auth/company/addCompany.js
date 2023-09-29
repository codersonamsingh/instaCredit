const express = require("express");
constcompany = require("../../../../../Models/companys/company");
const router = express.Router();
const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/company/companyValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/companys/company/addcompany
//@des crete Newcompany
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const companyObj = await getcompanyObj(req,"create")
console.log(companyObj)
     await new company(companyObj)
      .save();
      
      res.status(201).json({
        message: "company Added",
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
//@routes/api/v1/companys/company/addcompany/id:
//@des crete Updatecompany
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constcompanyObj = await getcompanyObj(req,"update")

        constcompany = awaitcompany.findOneAndUpdate(
            {id:req.params.id},
            {$set:companyObj},
            {new:true}
        )
        if(!company){
            res.status(500).json({
                message: "company not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "company Updated Successfully",
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
//@route / api/v1/companys//addcompany/deleteOne/id:
//@des Deletecompany
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        constcompany = awaitcompany.findIdAndRemove(req.params.id);
        if(!company){
            res.status(500).json({
                message: "company not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "company Deleted Successfully",
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
async function getcompanyObj(req,type){
    let newcompany = {}
    if(req.body.company) {
        newcompany.company = req.body.company
    }
    if(req.body.label) {
        newcompany.label = req.body.label
    }
    if(req.body.link) {
        newcompany.link = req.body.link
    }
     if(req.body.notes) {
        newcompany.notes = req.body.notes
    }
     if(req.body.document) {
        newcompany.document = req.body.document
    }
    if(req.body.user) {
        newcompany.user = req.body.user
    }
    if(req.body. date) {
        newcompany. date = req.body. date
    }
     
   
    return newcompany
}
    
module.exports = router;

