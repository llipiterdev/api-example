"use restrict";
const route = require("express").Router();
const path = require("path");

route.get('/', function (req, res) {
  res.status(200).json({ message: 'API Working!' })
})

route.use("/fruits", require(path.join(__dirname, "/fruits")));
route.use("/keyboards", require(path.join(__dirname, "/keyboards")));


module.exports = route;
