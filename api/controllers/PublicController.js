import User from "../models/User.js"

 import bcrypt from 'bcrypt'




// get all users 



 export const alluser=async(req,res,next)=>{

try {
   const user=await User.find()

   res.json(user)
   
} catch (error) {
   next(error) 
}


}     







// create a user
 export const crateuser=async(req,res,next)=>{
 // get data
 const { username, email, password, role ,status} = req.body;

//  // check validation
//  if (!name || !password || !email || !role) {
//    return res.status(400).json({ message: "All fields are required" });
//  }
 
 // email existance
 const emailCheck = await User.findOne({ email });

 if (emailCheck) {
   return res.status(400).json({ message: "Email already exists" });
 }

 // hash password
 const hash = await bcrypt.hash(password, 10);

 // create new user data
 const user = await User.create({ username,status, email, role, password: hash });

 // check
 if (user) {
   return res.status(201).json({ message: "User created successful", user });
 } else {
   return res.status(400).json({ message: "Invalid user data" });
 }
}     


// get all users 



 export const deleteuser=async(req,res,next)=>{
const {id}=req.params
try {
   const user=await User.findByIdAndDelete(id)

   res.json(user)
   
} catch (error) {
   next(error)
}


}     

