"use restrict";

const {
  allInstruments,
  getInstrumentById,
  editInstrument,
  deleteInstrument,
  createInstrument,
} = require("../controllers/InstrumentsController");

const route = require("express").Router();

route.get("/", allInstruments);

route.post("/", createInstrument);

route.get("/:id", getInstrumentById);

route.put("/:id", editInstrument);

route.delete("/:id", deleteInstrument);

module.exports = route;
