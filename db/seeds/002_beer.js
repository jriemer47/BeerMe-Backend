exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('beer')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('beer').insert([
        {
          id: 1,
          beer_name: 'Pliny the Elder',
          style: 'Double IPA',
          abv: 8,
          ibu: null
        },
        {
          id: 2,
          beer_name: 'Blood Orange Brew Free! Or Die Ipa',
          style: 'IPA',
          abv: 7,
          ibu: 70
        },
        {
          id: 3,
          beer_name: 'Anchor Steam Beer',
          style: 'other',
          abv: 4.9,
          ibu: null
        },
        {
          id: 4,
          beer_name: 'Aces Rye',
          style: 'Saison',
          abv: 5.5,
          ibu: null
        },
        {
          id: 5,
          beer_name: 'Blanc Helicopters',
          style: 'IPA',
          abv: 6.4,
          ibu: null
        },
        {
          id: 6,
          beer_name: 'Aunt Sally',
          style: 'Sour',
          abv: 5.7,
          ibu: 33
        }
      ]);
    })
    .then(() =>
      knex.raw(`SELECT setval('"beer_id_seq"', (SELECT MAX("id") FROM "beer"))`)
    );
};
