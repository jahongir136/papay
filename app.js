const express = require("express");
const app = express();
const router = require("./router");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 session code

// 3 views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routing code
// app.use("/resto", router_bssr);
app.use("/", router);

module.exports = app;
