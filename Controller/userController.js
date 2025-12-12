const User = require("../usermodel/usermodel");

const Register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.redirect("/user/login");
  } catch (err) {
    res.send("Error: " + err.message);
  }
};

const Login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.send("User not found");
  if (user.password !== password) return res.send("Invalid password");

  res.cookie("user", user.id).send("Login Successful");

  res.redirect("/blog");
};

const registerPage = (req, res) => res.render("register");
const loginPage = (req, res) => res.render("login");

const Home = (req, res) => {
  res.render("index");
};

module.exports = {
  Register,
  Login,
  registerPage,
  loginPage,
  Home,
};
