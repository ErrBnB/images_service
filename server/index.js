const express = require('express')
const app = express()
const dbQuery = require('../database/index.js');
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/images', (req, res) => {
  dbQuery.getImageInfo((err, data) => {
    if(err){
      console.log('Error Getting Image Info from DB:', err);
      res.send(err);
    } else {
      console.log('Able to Get Image Info from DB');
      res.send(data);
    }
  })
});

app.listen(3000, () => console.log('Listening on port 3000'));
