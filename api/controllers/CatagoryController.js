// import Category from '../models/Category.js'
import Catagory from '../models/Category.js'
import { createSlug } from '../utils/slugCreate.js'

import cloudinary from "../utils/cloudnary.js";

 
export const CreateCatagroy=async(req,res,next)=>{

 

  try {
  
        
    const {name,photo} =req.body
    const slug=createSlug(name) 
 

if(photo){
    const uploading=await cloudinary.uploader.upload(photo,{upload_preset:'Ecommerce_tol'})
      
         if(uploading){
             const catagory = await Catagory.create({name,slug,photo:uploading.url})

              if(catagory){

                  res.json(catagory)
              }else{
                res.json({msg:'nodn'})
              }
        }


}

 

} catch (error) {
    next(error.message)
}



}


export const GetallCatagory=async(req,res,next)=>{


 try {
    
  const catagory=await Catagory.find()

 
   if(catagory){
    res.json(catagory)
   }else{

    res.json({'msg':"not found"})
   }

 } catch (error) {
    
 }


}


export const DeleteCatagory=async(req,res,next)=>{


 

  try {
    

     const catatgory=await Catagory.findByIdAndDelete(req.params.id)


       if(catatgory){
        res.json(catatgory)
       }else{
         res.json({msg:'catagroy not found'})
       }
 

  } catch (error) {
    next(erro)
  }




}