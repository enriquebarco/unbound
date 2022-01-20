exports.up = function(knex) {
  return knex.schema
    .createTable("teams", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("country").notNullable();
        table.date("startDate").notNullable();
        table.date("endDate");
        table.integer("terminationPeriod").notNullable();
        table.string("role").notNullable();
        table.string("milestone").notNullable();
        table.string("milestoneDescription").notNullable();
        table.string("prefCurrency").notNullable();
        table.integer("paymentAmount").notNullable();
        table.string("contract");
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable("teams");
};
