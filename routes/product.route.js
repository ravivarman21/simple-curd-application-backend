import express from "express"
import Product from "../modules/product.model.js";
const router = express.Router();
import {getProducts , getProduct , createProduct , updateProduct , deleteProduct} from "../controllers/product.controller.js"



router.get('/',  getProducts);
router.get("/:id" ,getProduct);

router.post("/",createProduct);
router.put("/:id" , updateProduct);

//delete
router.delete("/:id" , deleteProduct)

export default router;