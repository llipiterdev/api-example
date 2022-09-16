"use restrict";
const route = require("express").Router();
const path = require("path");

route.get('/', function (req, res) {
  res.status(200).json({ message: 'API Working!' })
})

route.use("/fruits", require(path.join(__dirname, "/fruits")));
route.use("/cars", require(path.join(__dirname, "/cars")));


module.exports = route;
