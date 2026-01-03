const categorydata = require("../model/CategoryModel");

// Add category
const addcat = async (req, res) => {
    await categorydata.create(req.body);
    res.redirect("/category");
}

// Get all categories
const getcat = async (req, res) => {
    const data = await categorydata.find({});
    res.render("Category", { data });
}


// Delete category
const deleteCat = async (req, res) => {
    try {
        const { id } = req.params;
        await categorydata.findByIdAndDelete(id);
        res.redirect("/category");
    } catch (err) {
        res.status(500).send("Delete Error: " + err.message);
    }
}

// Edit category page (render form with current data)
const editCatPage = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await categorydata.findById(id);
        res.render("editCategory", { category });
    } catch (err) {
        res.status(500).send("Edit Page Error: " + err.message);
    }
}

// Update category
const updateCat = async (req, res) => {
    try {
        const { id } = req.params;
        await categorydata.findByIdAndUpdate(id, req.body);
        res.redirect("/category");
    } catch (err) {
        res.status(500).send("Update Error: " + err.message);
    }
}

module.exports = {
    addcat,
    getcat,
    deleteCat,
    editCatPage,
    updateCat
}
