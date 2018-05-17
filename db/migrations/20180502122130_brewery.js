exports.up = function(knex, Promise) {
  return knex.schema.createTable('brewery', table => {
    table.increments();
    table.text('brewery_name').notNullable();
    table.string('brewery_logo').notNullable();
    table.text('address').notNullable();
    table.text('city').notNullable();
    table.text('state').notNullable();
    table.integer('zip').notNullable();
    table.text('phone').notNullable();
    table.text('url').defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('brewery');
};
