const express = require("express");
constLoan = require("../../../../../Models/Loans/Loan");
const router = express.Router();
const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/Loan/LoanValidation")

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
    if(req.body.label) {
        newLoan.label = req.body.label
    }
    if(req.body.link) {
        newLoan.link = req.body.link
    }
     if(req.body.notes) {
        newLoan.notes = req.body.notes
    }
     if(req.body.document) {
        newLoan.document = req.body.document
    }
    if(req.body.user) {
        newLoan.user = req.body.user
    }
    if(req.body.date) {
        newLoan. date = req.body. date
    }
     
   
    return newLoan
}
    
module.exports = router;

