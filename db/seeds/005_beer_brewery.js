exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('beer_brewery')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('beer_brewery').insert([
        {
          id: 1,
          brewery_id: 1,
          beer_id: 1
        },
        {
          id: 2,
          brewery_id: 2,
          beer_id: 2
        },
        {
          id: 3,
          brewery_id: 3,
          beer_id: 3
        },
        {
          id: 4,
          brewery_id: 4,
          beer_id: 4
        },
        {
          id: 5,
          brewery_id: 5,
          beer_id: 5
        },
        {
          id: 6,
          brewery_id: 6,
          beer_id: 6
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"beer_brewery_id_seq"', (SELECT MAX("id") FROM "beer_brewery"))`
      )
    );
};
