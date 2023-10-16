const validateOnCreate = async(req,res,next) => {

    if(!req.body?.company){

       return res.status(400).json({
            message: "company Required",
            varient: "error"
        })
    }
    next();
}
const validateOnUpdate = async(req,res,next) => {

    next();
}
module.exports = {validateOnCreate, validateOnUpdate}