const validateOnCreate = async(req,res,next) => {

    if(!req.body?.accountName){

       return res.status(400).json({
            message: "accountName Required",
            varient: "error"
        })
    }
    next();
}
const validateOnUpdate = async(req,res,next) => {

    next();
}
module.exports = {validateOnCreate, validateOnUpdate}
