const teamsData = require("../seed_data/teamsData");

exports.seed = function (knex) {
  return knex ('teams')
    .del()
    .then( () => {
      return knex('teams').insert(teamsData);
    })
};