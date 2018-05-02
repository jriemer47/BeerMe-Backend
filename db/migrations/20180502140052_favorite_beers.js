exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorite_beers', table => {
    table.increments();
    table
      .integer('beer_id')
      .references('beer.id')
      .onDelete('cascade');
    table
      .integer('user_id')
      .references('user.id')
      .onDelete('cascade');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorite_beers');
};
