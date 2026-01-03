const express = require("express");
const { addpro, getpro, ImageUpload, categoryByproduct, editProPage, deletePro, updatePro } = require("../Controller/ProductController");
const P_Router = express.Router();
const verifyToken = require("../middleware/productAuth")

P_Router.get("/", verifyToken, getpro)
P_Router.post("/insertProduct", verifyToken, ImageUpload, addpro);
P_Router.get("/category/:categoryId", verifyToken, categoryByproduct)

P_Router.get("/edit/:id", verifyToken, editProPage);
P_Router.get("/delete/:id", verifyToken, deletePro);
P_Router.post("/update/:id", verifyToken, ImageUpload, updatePro);



module.exports = P_Router