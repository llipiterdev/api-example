"use restrict";

const {
  allCars,
  getCarById,
  editCar,
  deleteCar,
  createCar,
} = require("../controllers/CarsController");

const route = require("express").Router();

route.get("/", allCars);

route.post("/", createCar);

route.get("/:id", getCarById);

route.put("/:id", editCar);

route.delete("/:id", deleteCar);

module.exports = route;
