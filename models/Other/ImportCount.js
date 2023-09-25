// THis is eith One
// (A) mean , this field need to filled automatically when
// that mean we won't get it from frontEnd
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImportCountSchema = new Schema({
  // (A) 
user: {
        type: Schema.Types.ObjectId,
        ref: "myUser"
}, 
status:{
    type:String,
    default:'pending'
},
fileName:{
    type:String,
    default:""
},
totalData:{
  type:Number,
  default:0 
},
successfullySaved:{
  type:Number,
  default:0 
},
duplicateData:{
  type:Number,
  default:0
},
haveError:{
  type:Number,
  default:0 
},
name:{
  type:'String',
  required:true
},
// below error data to send to excel
errorData:{
  type:String,
    default:""
},
// type to keep remember import type
type:{
  type:'String',
  required:true
},
   
////
completedDate:{
    type: Date,
    default: Date.now
},
date: {
   type: Date,
    default: Date.now
},
designation: {
    type:String,
    required:true
}

});

module.exports = ImportCount = mongoose.model("myImportCount", ImportCountSchema);

