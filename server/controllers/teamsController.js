const knex = require("../knexConfig");

exports.entireTeam = (req, res) => {
    knex("teams")
    .where({ users_id: req.user.id })
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(400).send("Error retrieving teams" + err);
    });
};

exports.singleTeamMember = (req, res) => {
    knex("teams")
        .where({id: req.params.id})
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).send("Error retrieving team member" + id + err)
        });
};

exports.teamMemberPayments = (req,res) => {
    knex
        .select("teams.name", "teams.jobTitle", "teams.country", "teams.paymentAmount")
        .from("teams")
        .join("payments", "payments.teams_id", "teams.id")
        .where( { teams_id: req.params.id })
        .then((data) => {
            if(!data.length) {
                return res.sendStatus(404)
            }
            res.status(200).json(data);
        })
};

exports.addTeamMember = (req,res) => {
    knex("teams")
        .insert(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send("Error creating team member " + err));
};

exports.updateTeamMember = (req, res) => {
    knex("teams")
        .update(req.body)
        .where({ id: req.params.id })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).send("Error updating team member " + id + err)
        });
};

exports.deleteTeamMember = (req, res) => {
    knex("teams")
        .delete()
        .where({ id: req.params.id })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).send("Error deleting team member " + id + err)
        });
};