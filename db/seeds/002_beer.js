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
        }
      ]);
    })
    .then(() =>
      knex.raw(`SELECT setval('"beer_id_seq"', (SELECT MAX("id") FROM "beer"))`)
    );
};
