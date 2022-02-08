const express = require("express");
const router = express.Router();
const { generatePdf, createData } = require("../controllers/contractsController");
const authenticate = require("../middleware/authenticate");

// PDF generation with dynamic data
router.get("/", generatePdf)
router.get("*.pdf", req )

// Data generation for PDF
router.post("/data", authenticate, createData)

module.exports = router