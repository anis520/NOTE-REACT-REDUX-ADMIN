


import Brand from "../models/Brand.js";
import cloudinary from "../utils/cloudnary.js";
import { createSlug } from "../utils/slugCreate.js";
 




export const CreateBrand=async(req,res,next)=>{


    try {

 
        
        
        const {name,photo} =req.body
        const slug=createSlug(name) 

    console.log(req.files,req.body);
       


    if(photo){
        const uploading=await cloudinary.uploader.upload(photo,{upload_preset:'Ecommerce_tol'})
          
             if(uploading){
                 const brand = await Brand.create({name,slug,photo:uploading.url})

                  if(brand){

                      res.json(brand)
                  }else{
                    res.json({msg:'nodn'})
                  }
            }


    }






    } catch (error) {
        next(error.message)
    }

 


}

// gett all brand 
export const GetallBrand=async(req,res,next)=>{


    try {
          const brand = await Brand.find()

         

   brand?  res.json(brand):res.json({'message':'not found'})
     
     


    } catch (error) {
        next(error.message)
    }

 


}

// delete brand
export const DeleteBrand=async(req,res,next)=>{


    try {
          const brand = await Brand.findByIdAndDelete(req.params.id)

         

   brand?  res.json(brand):res.json({'message':'not found'})
     
     


    } catch (error) {
        next(error.message)
    }

 


}