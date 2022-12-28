const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");
const render = require("../services/render");

route.get("/", render.homeRoute);
route.get("/update_task", render.updateTask);

// api
route.post("/api/task", controller.addTask);
route.get("/api/task", controller.getTask);
route.delete("/api/task/:id", controller.delTask);
route.put("/api/task/:id", controller.updateTask);

module.exports = route;
