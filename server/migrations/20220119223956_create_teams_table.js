exports.up = function(knex) {
  return knex.schema
    .createTable("teams", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("country").notNullable();
        table.timestamp("startDate").notNullable();
        table.timestamp("endDate");
        table.integer("terminationPeriod").notNullable();
        table.string("jobTitle").notNullable();
        table.string("milestone").notNullable();
        table.string("milestoneDescription").notNullable();
        table.string("prefCurrency").notNullable();
        table.integer("paymentAmount").notNullable();
        table.string("contract");
    })
  .createTable("payments", (table) => {
    table.increments("id").primary();
    table.timestamp("dateSent").notNullable();
    table.string("status").notNullable();
    table
      .integer("teams_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("teams")
      .onUpdate("CASCADE");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("teams");
};
