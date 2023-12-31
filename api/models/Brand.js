import mongoose from "mongoose";



//schema
const brandSchema=mongoose.Schema({

name:{
    type:String,
    required:true,
    trim:true,
    unique:true 
},
slug:{
    type:String,
    required:true,
    trim:true,
    unique:true
},
photo:{
    
    type:String,
    trim:true,
    default:null,
 
},
status:{
   type:Boolean,
   default:false
 
},
trash:{
   type:String, 
   default:false
}

},
{
    timestamps:true 
})


 


///exprot model 

export default mongoose.model("Brand",brandSchema)