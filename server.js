"use restrict";
const express = require("express");
const server = express();

server.use(require("./app.js"));

const PORT = process.env.PORT || 8004;

server.listen(PORT, function _listen() {
  console.log(`Server up on port ${PORT}`);
});
