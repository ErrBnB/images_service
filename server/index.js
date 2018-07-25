const express = require('express')
const app = express()
const helpers = require('../database/index.js');

app.listen(3000, () => console.log('Listening on port 3000'));

app.get('/images', (req, res) => {
  helpers.getImageInfo((err, data) => {
    if(err){
      console.log('Error Getting Image Info from DB:', err);
      return err;
    } else {
      console.log('Able to Get Image Info from DB');
      res.send(data);
    }
  })
});