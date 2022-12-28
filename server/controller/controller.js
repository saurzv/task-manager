var taskDB = require("../models/model");

exports.addTask = (req, res) => {
    if (!req.body) {
        return res.status(404).send({
            message: "Task cannot be empty",
        });
    } else {
        const newTask = new taskDB({
            task: req.body.task,
            fin: Boolean(req.body.status),
        });

        newTask
            .save(newTask)
            .then((data) => {
                // res.json(data);
                res.redirect("/");
            })
            .catch((err) => {
                res.json({
                    message: err.message,
                });
            });
    }
};

exports.getTask = (req, res) => {
    if (req.query.id) {
        taskDB
            .findById(req.query.id)
            .then((task) => {
                res.send(task);
            })
            .catch((err) => {
                res.json({
                    message: err.message,
                });
            });
    } else {
        taskDB
            .find()
            .then((tasks) => {
                res.send(tasks);
            })
            .catch((err) => {
                res.send({
                    message:
                        err.message ||
                        "some error occured while creating a get request",
                });
            });
    }
};

exports.delTask = (req, res) => {
    const id = req.params.id;
    taskDB
        .findByIdAndDelete(id)
        .then((data) => {
            if (data) {
                res.json({
                    message: "task deleted successfully.",
                });
            } else {
                res.json({
                    message: "err: couldn't delete task",
                });
            }
        })
        .catch((err) => {
            res.json({
                message: err.message,
            });
        });
};

exports.updateTask = (req, res) => {
    if (!req.body) {
        res.status(400).json({
            message: "body can't be empty",
        });
    }
    const id = req.params.id;
    // console.log(id);
    // console.log(req.body);

    taskDB
        .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.json({
                    message: "couldn't modify the task",
                });
            }
        })
        .catch((err) => {
            res.json({
                message: err.message,
            });
        });
};
