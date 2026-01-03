const mongoose = require("mongoose");

const SubcategorySchema = new mongoose.Schema({
    title: { type: String},
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category" } 
});

const subcategory = mongoose.model("Subcategory", SubcategorySchema);
module.exports=subcategory
