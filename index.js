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
let model = mongoose.model('Categories', schema);
// Do some work
//console.log(categories);
categories.get();
// Disconnect
mongoose.disconnect();