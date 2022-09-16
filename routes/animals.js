"use restrict";

const {
  allAnimals,
  getAnimalById,
  editAnimal,
  deleteAnimal,
  createAnimal,
} = require("../controllers/animalsController");

const route = require("express").Router();

route.get("/", allAnimals);

route.post("/", createAnimal);

route.get("/:id", getAnimalById);

route.put("/:id", editAnimal);

route.delete("/:id", deleteAnimal);

module.exports = route;
