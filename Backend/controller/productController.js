const Product = require("../models/product")
const Host = "https://e-commerce-backend-aslv.onrender.com";

exports.createProduct = async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else {
        id = 1;
    }
    const { name, image, category, new_price, old_price, date } = req.body;
    const product = new Product({
        id: id,
        name,
        image,
        category,
        new_price,
        old_price,
        date
    })
    await product.save();
    res.json({
        success: true,
        name
    })

}

exports.removeProduct = async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id })
    res.json({
        success: true,
        name: req.body.name,
        message: "deleted"
    })
}

exports.allProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.uploadImage = (req, res) => {
    res.json({
        success: 1,
        image_url: `${Host}/image/${req.file.filename}`
    })
}

