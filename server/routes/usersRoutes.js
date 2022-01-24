const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const authenticate = require("../middleware/authenticate");

router.route("/register").post(usersController.registerUser);
router.route("/login").post(usersController.createJWT);
router.route("/current").get(authenticate, usersController.userInfo);

module.exports = router;