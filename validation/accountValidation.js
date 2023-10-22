const validateOnCreate = async(req,res,next) => {

    if(!req.body?.label){

       return res.status(400).json({
            message: "label Required",
            varient: "error"
        })
    }
    next();
}
const validateOnUpdate = async(req,res,next) => {

    next();
}
module.exports = {validateOnCreate, validateOnUpdate}
