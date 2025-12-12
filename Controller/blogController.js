const blogModel = require("../usermodel/blogModel");

const addProduct = async (req, res) => {
  const data = await blogModel.create(req.body);
  res.send(data);
};

const getProduct = async (req, res) => {
  
  const blog = await blogModel.find().populate("userId");
  res.render("index", { blog });
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const data = await blogModel.findByIdAndDelete(id);
  res.send("success");
};

const editProduct = async (req, res) => {
  const id = req.params.id;
  const data = await blogModel.findByIdAndUpdate(id, req.body);
  res.send(data);
};

module.exports = { getProduct, deleteProduct, editProduct, addProduct };
