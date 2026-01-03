const express = require("express");
const { addSubcat, getSubcat, deleteSubcat, editSubcatPage, updateSubcat } = require("../Controller/SubcategoryController");
const S_Router = express.Router();

// Routes
S_Router.post("/", addSubcat);
S_Router.get("/", getSubcat);
S_Router.get("/edit/:id", editSubcatPage);
S_Router.post("/update/:id", updateSubcat);
S_Router.get("/delete/:id", deleteSubcat);

module.exports = S_Router;
