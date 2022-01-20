const knex = require("../knexConfig");

exports.index = (req, res) => {
    knex("teams")
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(400).send("Error retrieving teams" + err)
    })
};