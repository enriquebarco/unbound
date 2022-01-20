const knex = require("../knexConfig");

exports.index = (_req,res) => {
    knex("payments")
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