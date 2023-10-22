const express = require("express");
const Payment = require("../../../../../models/Payment");
const router = express.Router();
const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/PaymentValidation")

//CRUD = crete Read Update Delete
//@type POST
//@routes/api/v1/accounts/Payment/addPayment
//@des crete NewPayment
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const PaymentObj = await getPaymentObj(req,"create")
console.log(PaymentObj)
     await new Payment(PaymentObj)
      .save();
      
      res.status(201).json({
        message: "Payment Added",
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
//@routes/api/v1/Payments/Payment/addPayment
//@des crete UpdatePayment
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constPaymentObj = await getPaymentObj(req,"update")

        constPayment = awaitPayment.findOneAndUpdate(
            {id:req.params.id},
            {$set:PaymentObj},
            {new:true}
        )
        if(!Payment){
            res.status(500).json({
                message: "Payment not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "Payment Updated Successfully",
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
//@route / api/v1/Payments//addPayment/deleteOne/id:
//@des DeletePayment
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        constPayment = awaitPayment.findIdAndRemove(req.params.id);
        if(!Payment){
            res.status(500).json({
                message: "Payment not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "Payment Deleted Successfully",
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
async function getPaymentObj(req,type){
    let newPayment = {}
    if(req.body.company) {
        newPayment.company = req.body.company
    }
    if(req.body.amount) {
        newPayment.amount = req.body.amount
    }
    if(req.body.isCredit) {
        newPayment.isCredit = req.body.link
    }
     if(req.body.notes) {
        newPayment.notes = req.body.notes
    }
     if(req.body.document) {
        newPayment.document = req.body.document
    }
    if(req.body.paymentDate) {
        newPayment.user = req.body.user
    }
    if(req.body.date) {
        newPayment. date = req.body. date
    }
     
   
    return newPayment
}
    
module.exports = router;

