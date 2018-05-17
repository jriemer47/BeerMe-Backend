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
          brewery_logo:
            'https://i0.wp.com/beerstreetjournal.com/wp-content/uploads/Russian-River-Logo1.png',
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
          brewery_logo:
            'https://static1.squarespace.com/static/510a02e0e4b0086d33c3c797/t/552c7766e4b005f6ac4eeffc/1428977513009/',
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
          brewery_logo:
            'https://pbs.twimg.com/profile_images/837042309912879104/OUOlDYjU.jpg',
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
          brewery_logo:
            'http://beerpulse.com/wp-content/uploads/2016/05/Fieldwork-Brewing-logo-BeerPulse.jpg',
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
          brewery_logo:
            'http://sonoma-figgirl.com/wp-content/uploads/2016/04/HENHOUSE.jpg',
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
          brewery_logo:
            'https://images2.porchdrinking.com/2018/02/LagunitasCCBW2.jpg',
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
