//Read = 1. Get ALL account , 2. get one account by Id, 3. Search account with note or amount

const express = require("express");
const account = require("../../../../../models/Account");
const router = express.Router();

//@type Get
//@route /api/v1/account/account/getaccount/getAll
//@des get all  account
//@access public
router.get("/getAll", async(req,res) => {

try{ 
    
    const getaccount = await account.find()


     res.json({
        data:getaccount,
        message:"account loaded",
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
//@route /api/v1/account/account/getaccount/getOne/:id
//@des get one account
//@access public
router.get("/getOne/:id", async(req,res) => {

    try{ 
        
        const getaccount = await account.findById(req.params.id)
    
    
         res.json({
            data:getaccount,
            message:"account loaded",
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
//@route /api/v1/account/account/getaccount/search/:seachQuery
//@des to search account
//@access public
router.get("/search/:searchQuery", async(req,res) => {

    try{ 
        
        const searchQuery = req.params.searchQuery

        const getaccount = await account.find({
            $or:[
                {label: new RegExp(searchQuery, "i")},
                {linkl: new RegExp(searchQuery, "i")},
                
            ]
        })
    
         res.json({
            data:getaccount,
            message:"account loaded",
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