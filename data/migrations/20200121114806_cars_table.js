
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
  	tbl.increments("id").primary();
  	tbl.string("VIN", 17).unique().notNullable();
  	tbl.string("make").notNullable().index();
  	tbl.string("model").notNullable().index();
  	tbl.float("mileage", { precision: 2 }).notNullable();
  	tbl.string("transmissionType");
  	tbl.string("status");
  	tbl.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
