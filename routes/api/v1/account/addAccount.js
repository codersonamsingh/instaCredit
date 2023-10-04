const express = require("express");
constaccount = require("../../../../../Models/Accounts/account");
const router = express.Router();
const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/accountValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/account/addAccount
//@des crete Newaccount
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const accountObj = await getaccountObj(req,"create")
console.log(accountObj)
     await new account(accountObj)
      .save();
      
      res.status(201).json({
        message: "account Added",
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
//@routes/api/v1/accounts/account/addAccount/id:
//@des crete Updateaccount
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constaccountObj = await getaccountObj(req,"update")

        constaccount = awaitaccount.findOneAndUpdate(
            {id:req.params.id},
            {$set:accountObj},
            {new:true}
        )
        if(!account){
            res.status(500).json({
                message: "account not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "account Updated Successfully",
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
//@route / api/v1/accounts//addAccount/deleteOne/id:
//@des Deleteaccount
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        constaccount = awaitaccount.findIdAndRemove(req.params.id);
        if(!account){
            res.status(500).json({
                message: "account not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "account Deleted Successfully",
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
async function getaccountObj(req,type){
    let newaccount = {}
    if(req.body.company) {
        newaccount.company = req.body.company
    }
    if(req.body.label) {
        newaccount.label = req.body.label
    }
    if(req.body.link) {
        newaccount.link = req.body.link
    }
     if(req.body.notes) {
        newaccount.notes = req.body.notes
    }
     if(req.body.document) {
        newaccount.document = req.body.document
    }
    if(req.body.user) {
        newaccount.user = req.body.user
    }
    if(req.body. date) {
        newaccount. date = req.body. date
    }
     
   
    return newaccount
}
    
module.exports = router;

