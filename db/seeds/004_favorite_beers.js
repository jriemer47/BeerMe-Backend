exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorite_beers')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('favorite_beers').insert([
        {
          id: 1,
          user_id: 1,
          beer_id: 2
        },
        {
          id: 2,
          user_id: 1,
          beer_id: 3
        },
        {
          id: 3,
          user_id: 1,
          beer_id: 4
        },
        {
          id: 4,
          user_id: 1,
          beer_id: 5
        },
        {
          id: 5,
          user_id: 2,
          beer_id: 1
        },
        {
          id: 6,
          user_id: 2,
          beer_id: 3
        },
        {
          id: 7,
          user_id: 2,
          beer_id: 4
        },
        {
          id: 8,
          user_id: 2,
          beer_id: 5
        },
        {
          id: 9,
          user_id: 3,
          beer_id: 1
        },
        {
          id: 10,
          user_id: 3,
          beer_id: 2
        },
        {
          id: 11,
          user_id: 3,
          beer_id: 4
        },
        {
          id: 12,
          user_id: 3,
          beer_id: 5
        },
        {
          id: 13,
          user_id: 4,
          beer_id: 1
        },
        {
          id: 14,
          user_id: 4,
          beer_id: 2
        },
        {
          id: 15,
          user_id: 4,
          beer_id: 3
        },
        {
          id: 16,
          user_id: 4,
          beer_id: 5
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"favorite_beers_id_seq"', (SELECT MAX("id") FROM "favorite_beers"))`
      )
    );
};
