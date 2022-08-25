"use restrict";

const {
  allFruits,
  getFruitById,
  editFruit,
  deleteFruit,
  createFruit,
} = require("../controllers/fruitsController");

const route = require("express").Router();

route.get("/", allFruits);

route.post("/", createFruit);

route.get("/:id", getFruitById);

route.put("/:id", editFruit);

route.delete("/:id", deleteFruit);

module.exports = route;
