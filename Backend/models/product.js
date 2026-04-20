const mongoose = require("mongoose")

const product = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        requird: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    new_price: {
        type: String,
        required: true
    },
    old_price: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true
    },
})

module.exports = mongoose.model("Product", product)