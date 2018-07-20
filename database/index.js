const mysql = require('mysql');

const options = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'images'
};

const connection = mysql.createConnection(options);

const room_name = ['939 Maker Hub', 'StoneHenge Hacker House','Silicon Valley Hacker House','Rainbow Mansion','Casa Hacker','Sunflower Hacker House','CohortX','Bed|n|Build','Google3 Startup House','Startup Embassy']; 

const city = ['Menlo Park', 'San Francisco', 'Denver', 'New York City', 'Los Angeles', 'San Diego', 'Austin','Salt Lake City','Seattle','Portland']; 

const description = [
    'Pug authentic litAF church-key prism man bun cornhole fanny pack.',
    'Street art food truck bitters fixie tumblr cold-pressed air plant edison bulb fam.',
    'Chia kogi pitchfork, la croix retro neutra literally hexagon.',
    'Pinterest swag deep v, selfies hoodie kombucha tacos four dollar toast lyft leggings.',
    'Portland polaroid selfies meditation, vexillologist cardigan humblebrag.',
    'Photo booth craft beer gluten-free hammock keytar mumblecore iPhone ethical',
    'Direct trade you probably havent heard of them post-ironic.',
    'Helvetica actually neutra pickled fashion axe poutine.',
    'Fixie hot chicken heirloom normcore wolf tote bag crucifix',
    'DIY occupy waistcoat, kale chips organic tumeric hell of vegan.'
];

const url = [
    "https://s3-us-west-1.amazonaws.com/imagemodule/16561547556_88d53e4216_b.jpg",
    "https://s3-us-west-1.amazonaws.com/imagemodule/15965382974_caeb4189d9_b.jpg",
    "https://s3-us-west-1.amazonaws.com/imagemodule/15967767923_3a41c9ec1a_b.jpg",
    "https://s3-us-west-1.amazonaws.com/imagemodule/15967768043_a4cf7f497f_b.jpg",
    "https://s3-us-west-1.amazonaws.com/imagemodule/15967768093_461f8f5f0d_b.jpg",
    "https://s3-us-west-1.amazonaws.com/imagemodule/15967768423_4d91799830_b.jpg",
    "https://s3-us-west-1.amazonaws.com/imagemodule/16400524980_ca60012b25_b.jpg",
    "https://s3-us-west-1.amazonaws.com/imagemodule/16400525400_28a4117ebe_b.jpg",
    "https://s3-us-west-1.amazonaws.com/imagemodule/16561547476_5e0f6060d8_b.jpg",
    "https://s3-us-west-1.amazonaws.com/imagemodule/16401682399_6e7cb539cd_b.jpg"
];

const roomsQuery = 'INSERT INTO rooms (room_name, city) Value ?';
const imagesQuery = 'INSERT INTO images (url, description, room_id) Value ?';
const idx = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min };
const roomsValues = [];
const imagesValues = [];

for(var i = 0; i <= 99; i++){
  roomsValues.push( [room_name[idx(0, 9)], city[idx(0, 9)]] );
  imagesValues.push( [url[idx(0, 9)], description[idx(0, 9)], idx(1, 100)] );
};

// Completed and in database already 
connection.query(roomsQuery, [roomsValues], (err) => {
  if(err){
    console.log('Error Inserting Room Data' + err);
  }
});

// Completed and in database already 
connection.query(imagesQuery, [imagesValues], (err) => {
  if(err){
    console.log('Error Inserting Image Data' + err);
  }  
});
