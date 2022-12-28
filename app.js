const express = require("express");
const app = express();

const path = require("path");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
PORT = process.env.PORT || 5000;

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

const ejsLayouts = require("express-ejs-layouts");
app.use(ejsLayouts);

const morgan = require("morgan");
app.use(morgan("tiny"));

// connect database
const connectDB = require("./server/database/connection");
connectDB();

// add template engine
app.set("view engine", "ejs");

// load router
app.use("/", require("./server/routes/router"));

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}....`);
});
