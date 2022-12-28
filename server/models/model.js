const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    fin: {
        type: Boolean,
        required: true,
    },
});

const taskDB = mongoose.model("taskdb", schema);

module.exports = taskDB;
