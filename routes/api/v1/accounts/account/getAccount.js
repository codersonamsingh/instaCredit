//Read = 1. Get ALL Account , 2. get one Account by Id, 3. Search Account with note or amount

const express = require("express");
const Account = require("../../../../../Models/Account");
const router = express.Router();

//@type Get
//@route /api/v1/account/Account/getAccount/getAll
//@des get all  Account
//@access public
router.get("/getAll", async(req,res) => {

try{ 
    
    const getAccount = await Account.find()


     res.json({
        data:getAccount,
        message:"Account loaded",
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
//@route /api/v1/account/Account/getAccount/getOne/:id
//@des get one Account
//@access public
router.get("/getOne/:id", async(req,res) => {

    try{ 
        
        const getAccount = await Account.findById(req.params.id)
    
    
         res.json({
            data:getAccount,
            message:"Account loaded",
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
//@route /api/v1/account/Account/getAccount/search/:seachQuery
//@des to search Account
//@access public
router.get("/search/:searchQuery", async(req,res) => {

    try{ 
        
        const searchQuery = req.params.searchQuery

        const getAccount = await Account.find({
            $or:[
                {company: new RegExp(searchQuery, "i")},
                {label: new RegExp(searchQuery, "i")},
                
            ]
        })
    
         res.json({
            data:getAccount,
            message:"Account loaded",
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