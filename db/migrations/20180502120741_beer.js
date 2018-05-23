exports.up = function(knex, Promise) {
  return knex.schema.createTable('beer', table => {
    table.increments();
    table.text('beer_name').notNullable();
    table.text('style').notNullable();
    table.decimal('abv').notNullable();
    table.decimal('ibu').defaultTo(undefined);
    table.text('description').defaultTo(undefined);
    table.string('beer_label').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beer');
};
