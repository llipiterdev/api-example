"use restrict";

const {
  allKeyboards,
  getKeyboardById,
  editKeyboard,
  deleteKeyboard,
  createKeyboard
} = require("../controllers/keyboardController");

const route = require("express").Router();

route.get("/", allKeyboards);

route.post("/", createKeyboard);

route.get("/:id", getKeyboardById);

route.put("/:id", editKeyboard);

route.delete("/:id", deleteKeyboard);

module.exports = route;
