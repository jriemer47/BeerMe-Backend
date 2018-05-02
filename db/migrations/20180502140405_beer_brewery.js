exports.up = function(knex, Promise) {
  return knex.schema.createTable('beer_brewery', table => {
    table.increments();
    table
      .integer('brewery_id')
      .references('brewery.id')
      .onDelete('cascade');
    table
      .integer('beer_id')
      .references('beer.id')
      .onDelete('cascade');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beer_brewery');
};
