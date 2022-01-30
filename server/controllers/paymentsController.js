const knex = require("../knexConfig");

exports.individualPayments = (req,res) => {
    knex("payments")
    .where({ teams_id: req.headers.teams_id })
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).send("Error retrieving payments" + err)
    })
};

exports.makePayment = (req, res) => {
    knex("payments")
        .insert(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send("Error creating payment data in mySQL " + err));
};