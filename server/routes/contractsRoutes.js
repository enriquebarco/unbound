const express = require("express");
const router = express.Router();
const { generatePdf } = require("../controllers/contractsController");

router.get("/", generatePdf)

module.exports = router