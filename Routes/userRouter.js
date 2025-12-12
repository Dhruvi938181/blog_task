const express = require("express");
const { registerPage, loginPage, Register, Login } = require("../Controller/userController");

const U_router = express.Router();

U_router.get("/register", registerPage);
U_router.get("/login", loginPage);

U_router.post("/register", Register);
U_router.post("/login", Login);

module.exports = U_router;
    