exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments();
    table.text('name').notNullable();
    table
      .text('email')
      .notNullable()
      .unique();
    table.text('password', 'char(16)').notNullable();
    table.text('profile_pic').defaultTo('');
    table.text('location').defaultTo('');
    table.text('bio').defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
