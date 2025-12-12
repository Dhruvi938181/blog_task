const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.String, ref: "user" },
});

module.exports = mongoose.model("blog", blogSchema);
