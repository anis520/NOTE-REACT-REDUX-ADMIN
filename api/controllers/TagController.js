


import Tag from "../models/Tag.js";
import { createSlug } from "../utils/slugCreate.js";
 




export const CreateTag=async(req,res,next)=>{


    try {

      const slug=createSlug(req.body.name)


          const tag = await Tag.create({name:req.body.name,slug})

         

   tag?  res.json(tag):res.json({'message':'not create'})
     
     


    } catch (error) {
        next(error.message)
    }

 


}

// gett all brand 
export const GetallTag=async(req,res,next)=>{


    try {
          const tag = await Tag.find()

         

   tag?  res.json(tag):res.json({'message':'not found'})
     
     


    } catch (error) {
        next(error.message)
    }

 


}

// delete brand
export const DeleteTag=async(req,res,next)=>{


    try {
          const tag = await Tag.findByIdAndDelete(req.params.id)

         

   tag?  res.json(tag):res.json({'message':'not found'})
     
     


    } catch (error) {
        next(error.message)
    }

 


}