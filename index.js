'use strict';

const mongoose = require('mongoose');

// Require your model
const Categories = require('./models-singular/categories');
const schema = require('./models-singular/categories-schema');

let categories = new Categories(schema);

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/test';

// Connect
mongoose.connect(MONGOOSE_URI, {useNewUrlParser: true, useUnifiedTopology: true});
// Do some work
categories.create({ name: 'Boots', description: 'For wearing on your feet' })
  .then(
    categories.get()
      .then(data => {
        categories.update(data[0]._id, {name: 'Shoes'})
          .then(result => {
            console.log(result);
            categories.delete(data[0]._id)
              .then(result => {
                console.log(result);
                mongoose.disconnect();
              });
          });
      }));

// Disconnect
//mongoose.disconnect();