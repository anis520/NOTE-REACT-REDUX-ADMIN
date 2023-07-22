import { Router } from "express";
import { createProduct, deleteProduct, getallProduct } from "../controllers/ProductController.js";
import AuthCheckmiddlewrer from "../middlewares/checkAuth.js";
import { CreateBrand,DeleteBrand,GetallBrand } from "../controllers/BrandController.js";
import { CreateTag, DeleteTag, GetallTag } from "../controllers/TagController.js";
import { productMulter } from "../utils/multer.js";
import { CreateCatagroy, DeleteCatagory, GetallCatagory } from "../controllers/CatagoryController.js";
import { CreateOrder, Editeorder, Getallorders } from "../controllers/OrderController.js";
 
const router=Router()

 
 


/// product router


router.use(AuthCheckmiddlewrer)
router.post('/product',productMulter,createProduct)
router.get('/product',getallProduct)
router.delete('/product/:id',deleteProduct)



//brand router
 router.post('/brand',CreateBrand)
 router.get('/brand',GetallBrand)
 router.delete('/brand/:id',DeleteBrand)

 

//tag router
 router.post('/tag',CreateTag)
 router.get('/tag',GetallTag)
 router.delete('/tag/:id',DeleteTag)
//  router.get('/brand',GetallBrand)
//  router.delete('/brand/:id',DeleteBrand)

 
// catagorys router
router.post('/catagroy',CreateCatagroy)
router.get('/catagroy',GetallCatagory)
router.delete('/catagroy/:id',DeleteCatagory)

 
// orders router
router.post('/order',CreateOrder)
router.get('/order',Getallorders)
router.put('/order/:id',Editeorder)
// router.get('/catagroy',GetallCatagory)
// router.delete('/catagroy/:id',DeleteCatagory)



export default router 