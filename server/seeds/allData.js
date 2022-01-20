const paymentsData = require("../seed_data/paymentsData");
const teamsData = require("../seed_data/teamsData");
const usersData = require("../seed_data/usersData");

exports.seed = function (knex) {
  return knex ('users')
    .del()
    .then( () => {
      return knex('users').insert(usersData);
    })
    .then( () => {
      return knex('teams').del();
    })
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