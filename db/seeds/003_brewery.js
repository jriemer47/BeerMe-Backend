exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('brewery')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('brewery').insert([
        {
          id: 1,
          brewery_name: 'Russian River Brewing Company',
          address: '725 4th St',
          city: 'Santa Rosa',
          state: 'CA',
          zip: 95404,
          phone: '(707) 545-2337',
          url: 'https://russianriverbrewing.com/'
        },
        {
          id: 2,
          brewery_name: '21st Amendment Brewery',
          address: '563 2nd St',
          city: 'San Francisco',
          state: 'CA',
          zip: 94107,
          phone: '(415) 369-0900',
          url: 'http://21st-amendment.com/'
        },
        {
          id: 3,
          brewery_name: 'Anchor Brewing Company',
          address: '1705 Mariposa St,',
          city: 'San Francisco',
          state: 'CA',
          zip: 94107,
          phone: '(415) 863-8350',
          url: 'https://www.anchorbrewing.com/'
        },
        {
          id: 4,
          brewery_name: 'Fieldwork Brewing Company',
          address: '1160 6th St',
          city: 'Berkeley',
          state: 'CA',
          zip: 94710,
          phone: '(510) 898-1203',
          url: 'https://fieldworkbrewing.com'
        },
        {
          id: 5,
          brewery_name: 'HenHouse Brewing Company',
          address: '322 Bellevue Ave',
          city: 'Santa Rosa',
          state: 'CA',
          zip: 95407,
          phone: '(707) 978-4577',
          url: 'http://www.henhousebrewing.com/'
        },
        {
          id: 6,
          brewery_name: 'Lagunitas Brewing Company',
          address: '1280 N McDowell Blvd',
          city: 'Petaluma',
          state: 'CA',
          zip: 94954,
          phone: '(707) 769-4495',
          url: 'https://lagunitas.com/'
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"brewery_id_seq"', (SELECT MAX("id") FROM "brewery"))`
      )
    );
};
