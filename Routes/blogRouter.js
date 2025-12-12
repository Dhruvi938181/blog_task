const express = require("express");
const { addProduct, deleteProduct, editProduct, getProduct } = require("../Controller/blogController");
const isAuth = require("../middleware/Auth");

const B_router = express.Router();

B_router.get("/", isAuth, getProduct);     
B_router.post("/", isAuth, addProduct);
B_router.post("/delete/:id", isAuth, deleteProduct);
B_router.post("/edit/:id", isAuth, editProduct);

module.exports = B_router;
