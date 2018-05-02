exports.up = function(knex, Promise) {
  return knex.schema.createTable('beer', table => {
    table.increments();
    table.text('beer_name').notNullable();
    table.text('style').notNullable();
    table.decimal('abv').notNullable();
    table.decimal('ibu').defaultTo(undefined);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beer');
};
