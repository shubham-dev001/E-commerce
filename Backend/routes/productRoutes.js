const express = require("express")
const router = express.Router();
const productController =require("../controller/productController");
const upload = require("../middleware/upload");


router.post("/addproduct", productController.createProduct);
router.post("/removeproduct", productController.removeProduct);
router.get("/allproduct", productController.allProduct)

router.post("/upload",upload.single("product"), productController.uploadImage)

module.exports = router