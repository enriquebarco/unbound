const knex = require("../knexConfig");

exports.index = (_req, res) => {
    knex("teams")
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
    knex("payments")
        .where({ teams_id: req.params.id })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).send("Error retrieving payments for team member" + id + err)
        });
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