let express = require('express');
let router = express.Router();

router.get('/news', (req, res)=>{
  const newsItems = [
    {
      id: 1,
      image: 'wref',
      slug: 'lorem-ipsum',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'Politics',
      author: 'John Doe',
      tags: ['donaldtrump', 'usa']
    },
    {
      id: 2,
      image: 'apple',
      slug: 'dolor-sit',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'tech',
      author: 'John Doe',
      tags: ['apple', 'usa']
    },
    {
      id: 3,
      image: 'business',
      slug: 'amet-consectetur',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'Business',
      author: 'John Doe',
      tags: ['forbes', 'usa']
    },
    {
      id: 4,
      image: 'goal',
      slug: 'adipisicing-elit',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'Sport',
      author: 'John Doe',
      tags: ['football', 'championsleague']
    },
    {
      id: 5,
      image: 'spacex',
      slug: 'animi-at-commodi',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'World',
      author: 'John Doe',
      tags: ['spacex', 'universe']
    },
    {
      id: 6,
      image: 'donaldTrump',
      slug: 'corporis-eaque',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'Politics',
      author: 'John Doe',
      tags: ['donaldtrump', 'usa']
    },
    {
      id: 7,
      image: 'apple',
      slug: 'exercitationem-id',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'tech',
      author: 'John Doe',
      tags: ['apple', 'usa']
    },
    {
      id: 8,
      image: 'business',
      slug: 'molestiae-mollitia',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'Business',
      author: 'John Doe',
      tags: ['forbes', 'usa']
    },
    {
      id: 9,
      image: 'goal',
      slug: 'nobis-odio',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'Sport',
      author: 'John Doe',
      tags: ['football', 'championsleague']
    },
    {
      id: 10,
      image: 'spacex',
      slug: 'pariatur-possimus',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'World',
      author: 'John Doe',
      tags: ['spacex', 'universe']
    },
    {
      id: 11,
      image: 'donaldTrump',
      slug: 'quibusdam-sit',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'Politics',
      author: 'John Doe',
      tags: ['donaldtrump', 'usa']
    },
    {
      id: 12,
      image: 'apple',
      slug: 'soluta-ullam',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'tech',
      author: 'John Doe',
      tags: ['apple', 'usa']
    },
    {
      id: 13,
      image: 'business',
      slug: 'velit-vitae',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'Business',
      author: 'John Doe',
      tags: ['forbes', 'usa']
    },
    {
      id: 14,
      image: 'goal',
      slug: 'voluptatibus-fugit',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'Sport',
      author: 'John Doe',
      tags: ['football', 'championsleague']
    },
    {
      id: 15,
      image: 'spacex',
      slug: 'fugit-obcaecati',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'World',
      author: 'John Doe',
      tags: ['spacex', 'universe']
    },
    {
      id: 16,
      image: 'donaldTrump',
      slug: 'qui-quidem',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'Politics',
      author: 'John Doe',
      tags: ['donaldtrump', 'usa']
    },
    {
      id: 17,
      image: 'apple',
      slug: 'sint-suscipit',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'tech',
      author: 'John Doe',
      tags: ['apple', 'usa']
    },
    {
      id: 18,
      image: 'busines',
      slug: 'accusamus-accusantium',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'Business',
      author: 'John Doe',
      tags: ['forbes', 'usa']
    },
    {
      id: 19,
      image: 'goal',
      slug: 'vel-voluptatem',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'Sport',
      author: 'John Doe',
      tags: ['football', 'championseague']
    },
    {
      id: 20,
      image: 'spacex',
      slug: 'alias-dolor',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis eaque,' +
        ' exercitationem, id molestiae mollitia nobis odio pariatur possimus quibusdam sit soluta ullam velit' +
        ' vitae voluptatibus! Fugit, obcaecati.',
      category: 'World',
      author: 'John Doe',
      tags: ['spacex', 'universe']
    }
  ];
  res.send(newsItems);
});

module.exports = router;
