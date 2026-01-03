const Subcategory = require("../model/SubcategoryModel");
const Category = require("../model/CategoryModel");

// Add subcategory
const addSubcat = async (req, res) => {
    await Subcategory.create(req.body);
    res.redirect("/subcategory");
}

// Get all subcategories
const getSubcat = async (req, res) => {
  const categories = await Category.find();        // 👈 MUST
  const subcategories = await Subcategory.find()
    .populate("categoryId");

  res.render("Subcategory", {
    categories,        // 👈 MUST
    subcategories      // 👈 MUST
  });
};


// Delete subcategory
const deleteSubcat = async (req, res) => {
    const { id } = req.params;
    await Subcategory.findByIdAndDelete(id);
    res.redirect("/subcategory");
}

// Edit subcategory page
const editSubcatPage = async (req, res) => {
    const { id } = req.params;
    const subcategory = await Subcategory.findById(id);
    const categories = await Category.find({});
    res.render("editSubcategory", { subcategory, categories });
}

// Update subcategory
const updateSubcat = async (req, res) => {
    const { id } = req.params;
    await Subcategory.findByIdAndUpdate(id, req.body);
    res.redirect("/subcategory");
}

module.exports = {
    addSubcat,
    getSubcat,
    deleteSubcat,
    editSubcatPage,
    updateSubcat
};
