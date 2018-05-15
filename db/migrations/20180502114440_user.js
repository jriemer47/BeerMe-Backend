exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments();
    // table.text('name').notNullable();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.text('username').notNullable();
    table
      .text('email')
      .notNullable()
      .unique();
    table.text('hashedPassword', 'char(16)').notNullable();
    table.text('profile_pic').defaultTo('');
    table.text('location').defaultTo('');
    table.text('bio').defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
