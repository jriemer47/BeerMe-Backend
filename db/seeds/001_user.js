exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          name: 'Carl Corsini',
          email: 'carl.c.1192@gmail.com',
          password: 'yahoo',
          profile_pic:
            'https://avatars2.githubusercontent.com/u/28901454?s=460&v=4',
          location: 'San Francisco, CA',
          bio: 'Software Engineer'
        },
        {
          id: 2,
          name: 'Jon Riemer',
          email: 'jriemer@gmail.com',
          password: 'meowmix',
          profile_pic:
            'https://avatars2.githubusercontent.com/u/23747060?s=460&v=4',
          location: 'San Francisco, CA',
          bio: 'Software Engineer'
        },
        {
          id: 3,
          name: 'Glen Pegado',
          email: 'glenpgd@gmail.com',
          password: 'password',
          profile_pic:
            'https://cdn-images-1.medium.com/max/1200/0*tzjHqs7icyhShRvw.',
          location: 'San Francisco, CA',
          bio: 'Software Engineer'
        },
        {
          id: 4,
          name: 'Panda',
          email: 'panda@gmail.com',
          password: 'password',
          profile_pic:
            'https://listen-current-prod.s3.amazonaws.com/events/photos/000/000/467/5dc32f692b8388e9e001b1c7c940bb74e17aa1bc/medium/Panda.Square.png?1434136392',
          location: 'San Francisco, CA',
          bio: 'I love bamboo'
        },
        {
          id: 5,
          name: 'Tom',
          email: 'tom@myspace.com',
          password: 'password',
          profile_pic:
            'https://data1.ibtimes.co.in/cache-img-297-0/en/full/552120/imgtom-anderson.png',
          location: 'San Francisco, CA',
          bio: 'Created Myspace'
        },
        {
          id: 6,
          name: 'Michael',
          email: 'michael.alex.guia@gmail.com',
          password: 'password',
          profile_pic:
            'http://images1.fanpop.com/images/quiz/2462_1210885994882_446_240.jpg',
          location: 'San Francisco, CA',
          bio: 'I like turtles '
        }
      ]);
    })
    .then(() =>
      knex.raw(`SELECT setval('"user_id_seq"', (SELECT MAX("id") FROM "user"))`)
    );
};
