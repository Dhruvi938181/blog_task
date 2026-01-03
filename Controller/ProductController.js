const productData = require("../model/ProductModel");
const multer = require("multer");
const path = require("path");
const categorydata = require("../model/CategoryModel");
const Subcategory = require("../model/SubcategoryModel");

const addpro = async (req, res) => {
    const { title, price, categoryId } = req.body;
    let image = "";
    if (req.file) {
        image = req.file.path
    }

    await productData.create({
        title: title,
        price: price,
        image: image,
        categoryId: categoryId
        
    })
    res.redirect("/product")
}


// const getpro = async (req, res) => {
//     const user = await productData.find({}).populate("categoryId");
//     const category = await categorydata.find({})
//     res.render("product", { user, category })
// }

const getpro = async (req, res) => {
  const user = await productData
    .find({})
    .populate("categoryId")
    .populate("subcategoryId");

  const category = await categorydata.find({});
  const subcategories = await Subcategory.find({}).populate("categoryId");

  res.render("product", { user, category, subcategories });
};


const categoryByproduct = async (req, res) => {
    const { categoryId } = req.params
    const user = await productData.find({ categoryId }).populate("categoryId")
    const category = await categorydata.find({})
    res.render("product", { user, category })
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload/")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const ImageUpload = multer({ storage: storage }).single("image")


const deletePro = async (req, res) => {
    try {
        const { id } = req.params;
        await productData.findByIdAndDelete(id);
        res.redirect("/product");
    } catch (err) {
        res.status(500).send("Delete Error: " + err.message);
    }
}

// Edit product (render edit page with current data)
const editProPage = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productData.findById(id);
        const category = await categorydata.find({});
        res.render("editProduct", { product, category });
    } catch (err) {
        res.status(500).send("Edit Page Error: " + err.message);
    }
}

const updatePro = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, price, categoryId } = req.body;
        let updatedData = { title, price, categoryId };

        if (req.file) {
            updatedData.image = req.file.path;
        }

        await productData.findByIdAndUpdate(id, updatedData);
        res.redirect("/product");
    } catch (err) {
        res.status(500).send("Update Error: " + err.message);
    }
}
module.exports = {
    addpro,
    getpro,
    ImageUpload,
    categoryByproduct,
    deletePro,
    editProPage,
    updatePro
}