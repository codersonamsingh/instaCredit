const validateOnCreate = async(req,res,next) => {

    if(!req.body?.amount){

       return res.status(400).json({
            message: "amount Required",
            varient: "error"
        })
    }
    next();
}
const validateOnUpdate = async(req,res,next) => {

    next();
}
module.exports = {validateOnCreate, validateOnUpdate}