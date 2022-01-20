const express = require("express");
const router = express.Router();
const teamsController = require("../controllers/teamsController");

router
    .route("/")
    .get(teamsController.index)
    .post(teamsController.addTeamMember);

router
    .route("/:id")
    .get(teamsController.singleTeamMember)
    .put(teamsController.updateTeamMember)
    .delete(teamsController.deleteTeamMember);

router.route("/:id/payments").get(teamsController.teamMemberPayments);

module.exports = router;