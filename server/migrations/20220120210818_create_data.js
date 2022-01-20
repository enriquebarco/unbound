exports.up = function(knex) {
    return knex.schema
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("businessName").notNullable();
      table.string("country").notNullable();
      table.string("email").notNullable().unique();
      table.string("password").notNullable();
    })  
    .createTable("teams", (table) => {
          table.increments("id").primary();
          table.string("name").notNullable();
          table.string("country").notNullable();
          table.timestamp("startDate").notNullable();
          table.timestamp("endDate");
          table.integer("terminationPeriod").unsigned().notNullable();
          table.string("jobTitle").notNullable();
          table.string("milestone").notNullable();
          table.string("milestoneDescription").notNullable();
          table.string("prefCurrency").notNullable();
          table.integer("paymentAmount").notNullable();
          table.string("contract");
          table
            .integer("users_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE");
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
    return knex.schema.dropTable("payments", "teams", "users" );
  };
  