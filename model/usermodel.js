const mongoose = require("mongoose");
const user = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})

const userData = mongoose.model("user", user);
module.exports = userData