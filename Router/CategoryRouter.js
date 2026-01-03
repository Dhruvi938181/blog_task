const express = require("express");
const { addcat, getcat, deleteCat, editCatPage, updateCat } = require("../Controller/CategoryController");

const C_Route = express.Router();

// Existing routes
C_Route.post("/", addcat);
C_Route.get("/", getcat);

// New routes
C_Route.get("/edit/:id", editCatPage);
C_Route.post("/update/:id", updateCat);
C_Route.get("/delete/:id", deleteCat);

module.exports = C_Route;
