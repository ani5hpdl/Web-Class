const { submitForm } = require("../controllers/ContactController");

const express = require("express").Router();

express.post("/submitForm",submitForm);

module.exports = express;