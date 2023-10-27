//Read = 1. Get ALL Payment , 2. get one Payment by Id, 3. Search Payment with note or amount

const express = require("express");
const Payment = require("../../../../../models/Payment");
const router = express.Router();

//@type Get
//@route /api/v1/account/Payment/getPayment/getAll
//@des get all  Payment
//@access public
router.get("/getAll", async(req,res) => {

try{ 
    
    const getPayment = await Payment.find()


     res.json({
        data:getPayment,
        message:"Payment loaded",
        varient:"success"
     })

}catch(error){
    console.log(error)

    res.status(500).json({
        message: "Internal Server error",
        varient: "error"
    })
}
})

//@type Get
//@route /api/v1/account/Payment/getPayment/getOne/:id
//@des get one Payment
//@access public
router.get("/getOne/:id", async(req,res) => {

    try{ 
        
        const getPayment = await Payment.findById(req.params.id)
    
    
         res.json({
            data:getPayment,
            message:"Payment loaded",
            varient:"success"
         })
    
    }catch(error){
        console.log(error)
    
        res.status(500).json({
            message: "Internal Server error",
            varient: "error"
        })
    }
    })

//@type Get search
//@route /api/v1/account/Payment/getPayment/search/:seachQuery
//@des to search Payment
//@access public
router.get("/search/:searchQuery", async(req,res) => {

    try{ 
        
        const searchQuery = req.params.searchQuery

        const getPayment = await Payment.find({
            $or:[
                {amount: new RegExp(searchQuery, "i")},
                {: new RegExp(searchQuery, "i")},
                
            ]
        })
    
         res.json({
            data:getPayment,
            message:"Payment loaded",
            varient:"success"
         })
    
    }catch(error){
        console.log(error)
    
        res.status(500).json({
            message: "Internal Server error",
            varient: "error"
        })
    }
    })
module.exports = router