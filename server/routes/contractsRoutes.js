const express = require("express");
const router = express.Router();
const { generatePdf, createData, showPDF } = require("../controllers/contractsController");
const authenticate = require("../middleware/authenticate");

// PDF generation with dynamic data

router.get('*.pdf', showPDF);
router.get("/", generatePdf)

// Data generation for PDF
router.post("/data", authenticate, createData)

module.exports = router