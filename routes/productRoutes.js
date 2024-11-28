const express=require("express")
const productController=require("../controller/productController")
const router=express.Router()

router.get("/products",productController.fetchProducts);
module.exports=router;