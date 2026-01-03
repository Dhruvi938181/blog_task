const mongoose = require("mongoose");
const categoryschema = mongoose.Schema({
    title: {
        type: String
    },
     categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",   // ⭐ EXACT NAME
    required: true
  }
});

const categorydata = mongoose.model("category", categoryschema);
module.exports = categorydata