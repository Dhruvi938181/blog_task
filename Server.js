const express = require("express");
const db = require("./config/db");
const path = require("path");
const cookieParser = require("cookie-parser");
const U_router = require("./Routes/userRouter");
const B_router = require("./Routes/blogRouter");

const app = express();


app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
app.use(express.json());

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/user", U_router);
app.use("/blog",B_router)
app.get("/", (req, res) => {
  if (!req.cookies.user) return res.redirect("/user/login");
  res.redirect("/blog");
});

app.listen(9800, () => {
  console.log("server listen");
});
