//Read = 1. Get ALL Loan , 2. get one Loan by Id, 3. Search Loan with note or amount

const express = require("express");
const Loan = require("../../../../../Models/Accounts/Loan");
const router = express.Router();

//@type Get
//@route /api/v1/account/Loan/getLoan/getAll
//@des get all  Loan
//@access public
router.get("/getAll", async(req,res) => {

try{ 
    
    const getLoan = await Loan.find()


     res.json({
        data:getLoan,
        message:"Loan loaded",
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
//@route /api/v1/account/Loan/getLoan/getOne/:id
//@des get one Loan
//@access public
router.get("/getOne/:id", async(req,res) => {

    try{ 
        
        const getLoan = await Loan.findById(req.params.id)
    
    
         res.json({
            data:getLoan,
            message:"Loan loaded",
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
//@route /api/v1/account/Loan/getLoan/search/:seachQuery
//@des to search Loan
//@access public
router.get("/search/:searchQuery", async(req,res) => {

    try{ 
        
        const searchQuery = req.params.searchQuery

        const getLoan = await Loan.find({
            $or:[
                {company: new RegExp(searchQuery, "i")},
                {: new RegExp(searchQuery, "i")},
                
            ]
        })
    
         res.json({
            data:getLoan,
            message:"Loan loaded",
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