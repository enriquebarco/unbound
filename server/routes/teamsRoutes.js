const express = require("express");
const router = express.Router();
const teamsController = require("../controllers/teamsController");

router.route("/").get(teamsController.index);

module.exports = router;