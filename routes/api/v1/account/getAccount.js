//Read = 1. Get ALL Company , 2. get one Company by Id, 3. Search Company with note or amount

const express = require("express");
const Company = require("../../../../../Models/Accounts/Company");
const router = express.Router();

//@type Get
//@route /api/v1/account/Company/getCompany/getAll
//@des get all  Company
//@access public
router.get("/getAll", async(req,res) => {

try{ 
    
    const getCompany = await Company.find()


     res.json({
        data:getCompany,
        message:"Company loaded",
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
//@route /api/v1/account/Company/getCompany/getOne/:id
//@des get one Company
//@access public
router.get("/getOne/:id", async(req,res) => {

    try{ 
        
        const getCompany = await Company.findById(req.params.id)
    
    
         res.json({
            data:getCompany,
            message:"Company loaded",
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
//@route /api/v1/account/Company/getCompany/search/:seachQuery
//@des to search Company
//@access public
router.get("/search/:searchQuery", async(req,res) => {

    try{ 
        
        const searchQuery = req.params.searchQuery

        const getCompany = await Company.find({
            $or:[
                {company: new RegExp(searchQuery, "i")},
                {label: new RegExp(searchQuery, "i")},
                
            ]
        })
    
         res.json({
            data:getCompany,
            message:"Company loaded",
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