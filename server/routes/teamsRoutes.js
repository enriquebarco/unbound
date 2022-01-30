const express = require("express");
const router = express.Router();
const teamsController = require("../controllers/teamsController");
const authenticate = require("../middleware/authenticate");

router
    .route("/")
    .get(authenticate, teamsController.entireTeam)
    .post(authenticate, teamsController.addTeamMember);

router
    .route("/:id")
    .get(teamsController.teamMemberPayments)
    .put(teamsController.updateTeamMember)
    .delete(teamsController.deleteTeamMember);

router.route("/:id/payments").get(teamsController.teamMemberPayments);

module.exports = router;