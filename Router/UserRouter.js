const express = require("express");
const { register, GetData, login } = require("../Controller/UserController");
const userData = require("../model/usermodel");

const U_Router = express.Router();

U_Router.get("/register", async (req, res) => {
  const data = await userData.find({});
  res.render("register", { data });
});

U_Router.post("/register", register);
U_Router.get("/", GetData);
U_Router.get("/login", (req, res) => {
  res.render("login");
});
U_Router.post("/login", login);
U_Router.get("/product", (req, res) => {
  res.render("product");
});

module.exports = U_Router;
