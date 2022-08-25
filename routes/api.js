"use restrict";
const route = require("express").Router();

route.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = route;
