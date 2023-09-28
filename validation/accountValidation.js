const validateOnCreate = async(req,res,next) => {

    if(!req.body?.companyName){

       return res.status(400).json({
            message: "companyName Required",
            varient: "error"
        })
    }
    next();
}
const validateOnUpdate = async(req,res,next) => {

    next();
}
module.exports = {validateOnCreate, validateOnUpdate}
