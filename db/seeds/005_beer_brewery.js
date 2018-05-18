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
        },
        {
          id: 7,
          brewery_id: 3,
          beer_id: 7
        },
        {
          id: 8,
          brewery_id: 3,
          beer_id: 8
        },
        {
          id: 9,
          brewery_id: 1,
          beer_id: 9
        },
        {
          id: 10,
          brewery_id: 4,
          beer_id: 10
        },
        {
          id: 11,
          brewery_id: 6,
          beer_id: 11
        },
        {
          id: 12,
          brewery_id: 6,
          beer_id: 12
        },
        {
          id: 13,
          brewery_id: 5,
          beer_id: 13
        },
        {
          id: 14,
          brewery_id: 5,
          beer_id: 14
        },
        {
          id: 15,
          brewery_id: 6,
          beer_id: 15
        },
        {
          id: 16,
          brewery_id: 4,
          beer_id: 16
        },
        {
          id: 17,
          brewery_id: 2,
          beer_id: 17
        },
        {
          id: 18,
          brewery_id: 6,
          beer_id: 18
        },
        {
          id: 19,
          brewery_id: 5,
          beer_id: 19
        },
        {
          id: 20,
          brewery_id: 1,
          beer_id: 20
        },
        {
          id: 21,
          brewery_id: 7,
          beer_id: 21
        },
        {
          id: 22,
          brewery_id: 8,
          beer_id: 22
        },
        {
          id: 23,
          brewery_id: 9,
          beer_id: 23
        },
        {
          id: 24,
          brewery_id: 10,
          beer_id: 24
        },
        {
          id: 25,
          brewery_id: 11,
          beer_id: 25
        },
        {
          id: 26,
          brewery_id: 7,
          beer_id: 26
        },
        {
          id: 27,
          brewery_id: 8,
          beer_id: 27
        },
        {
          id: 28,
          brewery_id: 9,
          beer_id: 28
        },
        {
          id: 29,
          brewery_id: 10,
          beer_id: 28
        },
        {
          id: 30,
          brewery_id: 11,
          beer_id: 30
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"beer_brewery_id_seq"', (SELECT MAX("id") FROM "beer_brewery"))`
      )
    );
};
