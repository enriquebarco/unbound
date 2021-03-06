const express = require("express");
const router = express.Router();
const paymentsController = require("../controllers/paymentsController");

router
    .route("/")
    .get(paymentsController.individualPayments)
    .post(paymentsController.makePayment);

module.exports = router;