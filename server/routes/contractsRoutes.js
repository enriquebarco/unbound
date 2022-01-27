const express = require("express");
const router = express.Router();
const { generatePdf, createData } = require("../controllers/contractsController");

// PDF generation with dynamic data
router.get("/", generatePdf)

// Data generation for PDF
router.post("/data", createData)

module.exports = router