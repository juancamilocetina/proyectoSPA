const mongoose = require("mongoose");
const Esquema = mongoose.Schema;

const UserEsquema = Esquema({
    name: String,
    lastname: String,
    email: {
        type: String,
        Unique: true
    },
    password: String,
    Role: String,
    active: Boolean
});

module.exports = mongoose.model("User", UserEsquema);