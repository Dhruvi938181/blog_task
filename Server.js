const express = require("express");
const app = express();
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const C_Route = require("./Router/CategoryRouter");
const P_Router = require("./Router/ProductRouter");
const U_Router = require("./Router/UserRouter");
const S_Router = require("./Router/SubcategoryRouter");

app.use(cookieParser());
app.use("/upload", express.static(path.join(__dirname, "upload")))

app.use(express.urlencoded());
app.use(express.json());

app.set("view engine", "ejs")
app.use("/user", U_Router);
app.use("/product", P_Router);
app.use("/category" , C_Route)
app.use('/subcategory',S_Router)


app.listen(7800, () => {
    console.log("Server Listen")
})