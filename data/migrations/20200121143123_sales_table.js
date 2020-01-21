
exports.up = function(knex) {
  return knex.schema.createTable("sales", tbl => {
  	tbl.increments();
  	tbl.integer('car_id').references("id").inTable("cars").onDelete("CASCADE").index();
  	tbl.float("price").notNullable();
  	tbl.boolean("sold").notNullable().defaultTo(false);
  	tbl.timestamps(true, true);
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("sales");
};
