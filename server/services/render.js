const axios = require("axios");

exports.homeRoute = (req, res) => {
    url = "http://localhost:8888/api/task";
    axios.get(url).then((response) => {
        res.render("index", {
            title: "Home Page",
            tasks: response.data,
        });
    });
};

exports.updateTask = (req, res) => {
    url = `http://localhost:8888/api/task`;
    axios.get(url, { params: { id: req.query.id } }).then((task) => {
        res.render("update_task", {
            title: "Update Task",
            task: task.data,
        });
    });
};
