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
          ibu: null,
          beer_label:
            'http://3.bp.blogspot.com/-Q22IyvPd-Lk/UcitK9pqO1I/AAAAAAAAAc0/-IdTv2imRdg/s1600/Pliny.JPG'
        },
        {
          id: 2,
          beer_name: 'Blood Orange Brew Free! Or Die Ipa',
          style: 'IPA',
          abv: 7,
          ibu: 70,
          beer_label:
            'https://tampafooddude.files.wordpress.com/2017/05/img_5873.jpg?w=500&h=500'
        },
        {
          id: 3,
          beer_name: 'Anchor Steam Beer',
          style: 'other',
          abv: 4.9,
          ibu: null,
          beer_label:
            'http://everymanmusthave.com/wp-content/uploads/Spring-Beers-pt.2-3.jpg'
        },
        {
          id: 4,
          beer_name: 'Aces Rye',
          style: 'Saison',
          abv: 5.5,
          ibu: null,
          beer_label:
            'https://untappd.akamaized.net/photos/2018_04_22/b55ac0cd9d10cd1b9da52eb588edd43a_raw.jpg'
        },
        {
          id: 5,
          beer_name: 'Blanc Helicopters',
          style: 'IPA',
          abv: 6.4,
          ibu: null,
          beer_label:
            'https://scontent.cdninstagram.com/vp/42ec1c6e03b59be028d73f9a77b0cbfa/5B66E214/t51.2885-15/s640x640/sh0.08/e35/30855958_1857785864291571_6518310163915472896_n.jpg'
        },
        {
          id: 6,
          beer_name: 'Aunt Sally',
          style: 'Sour',
          abv: 5.7,
          ibu: 33,
          beer_label:
            'https://1.bp.blogspot.com/-91c5wxzBxek/VwM0311f8JI/AAAAAAAAHpk/QkqadDPwoRUhiGSt64ywpnhAjJ_-9XylQ/s1600/auntsally1.jpg'
        },
        {
          id: 7,
          beer_name: 'Brekles Brown',
          style: 'Brown Ale',
          abv: 6,
          ibu: null,
          beer_label:
            'https://i.pinimg.com/originals/a6/9c/06/a69c0676a782d5d7968dcab0839938cb.jpg'
        },
        {
          id: 8,
          beer_name: 'Mango Wheat',
          style: 'Golden Ale',
          abv: 4.5,
          ibu: null,
          beer_label:
            'http://www.romancingthefoam.com/images/Beer/Anchor-Mango-Wheat-IMG_9175.gif'
        },
        {
          id: 9,
          beer_name: 'Blind Pig I.P.A.',
          style: 'IPA',
          abv: 6.25,
          ibu: null,
          beer_label:
            'https://i.pinimg.com/originals/38/91/c4/3891c48787b289f3c7911d20fc90842b.jpg'
        },
        {
          id: 10,
          beer_name: 'Galaxy Sauce',
          style: 'Double IPA',
          abv: 9.3,
          ibu: null,
          beer_label:
            'https://beerhop.files.wordpress.com/2017/07/fieldwork-galaxy-juice-can.jpg?w=700&h=825'
        },
        {
          id: 11,
          beer_name: 'Little Sumpin Sumpin',
          style: 'American Pale Wheat Ale',
          abv: 7.5,
          ibu: null,
          beer_label:
            'https://i.pinimg.com/originals/4d/01/40/4d01407a62e9f3cbc27b5770af5eae4f.jpg'
        },
        {
          id: 12,
          beer_name: 'Lagunitas IPA',
          style: 'American IPA',
          abv: 6.2,
          ibu: 51.5,
          beer_label:
            'https://c1.staticflickr.com/5/4045/5079016189_f6f70b63e8_b.jpg'
        },
        {
          id: 13,
          beer_name: 'Oyster Stout',
          style: 'English Stout',
          abv: 4.9,
          ibu: null,
          beer_label:
            'https://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_166920.jpg'
        },
        {
          id: 14,
          beer_name: 'HenHouse Saison',
          style: 'Saison/Farmhouse Ale',
          abv: 5.5,
          ibu: null,
          beer_label:
            'https://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_166921.jpg'
        },
        {
          id: 15,
          beer_name: 'Lagunitas Pils',
          style: 'Pilsner',
          abv: 6,
          ibu: 35,
          beer_label:
            'http://www.betterondraft.com/wp-content/uploads/2017/06/IMG_20170608_184619314.jpg'
        },
        {
          id: 16,
          beer_name: 'Green Rest',
          style: 'IPA',
          abv: 6.9,
          ibu: null,
          beer_label:
            'https://fieldworkbrewing.com/wp-content/uploads/2017/01/IMG_4967-768x960.jpg'
        },
        {
          id: 17,
          beer_name: 'Hell or High Watermelon',
          style: 'Wheat',
          abv: 4.9,
          ibu: 17,
          beer_label:
            'http://americantaphouse.com/wp-content/uploads/2016/07/HellorHighWATERmelon.jpg'
        },
        {
          id: 18,
          beer_name: 'Lagunitas Sucks',
          style: 'American Double/Imperial IPA',
          abv: 8,
          ibu: 63.2,
          beer_label:
            'https://thealerunner.files.wordpress.com/2015/08/lagunitas-sucks.jpg'
        },
        {
          id: 19,
          beer_name: 'Stoked! Pale Ale',
          style: 'Single Hop Pale Ale',
          abv: 5.5,
          ibu: null,
          beer_label:
            'https://beerhop.files.wordpress.com/2017/04/henhouse-stoked-mosaic.jpg?w=700&h=643'
        },
        {
          id: 20,
          beer_name: 'Consecration',
          style: 'Sour Dark Ale',
          abv: 10,
          ibu: null,
          beer_label:
            'https://barleydine.files.wordpress.com/2011/04/consecration.jpg'
        }
      ]);
    })
    .then(() =>
      knex.raw(`SELECT setval('"beer_id_seq"', (SELECT MAX("id") FROM "beer"))`)
    );
};
