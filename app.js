const express = require("express");
const app = express();


//MongoDB chaqrish
const db = require("./server").db();
const mongodb = require("mongodb");

// 1: Kirish code 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 session code

// 3 views code 
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routing code 
module.express = app;