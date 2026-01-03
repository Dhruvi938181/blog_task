const mongoose = require("mongoose");
const product = mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: String
    }, image: {
        type: String
    },
    categoryId: {
        type: mongoose.Schema.Types.String,
        ref: "category"
    },
     subcategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subcategory"
  }
})

const productData = mongoose.model("product", product);
module.exports = productData