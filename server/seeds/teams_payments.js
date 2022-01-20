const paymentsData = require("../seed_data/paymentsData");
const teamsData = require("../seed_data/teamsData");

exports.seed = function (knex) {
  return knex ('teams')
    .del()
    .then( () => {
      return knex('teams').insert(teamsData);
    })
    .then( () => {
      return knex('payments').del();
    })
    .then( () => {
      return knex('payments').insert(paymentsData);
    })
};