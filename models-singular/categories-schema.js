'use strict';

const mongoose = require('mongoose');

// What fields and constraints do we want?
const categories = mongoose.Schema({
  name: { type: 'string', required: true },
  description: { type: 'string' },
});

// Do we need to run any lifecycle hooks/middleware?

module.exports = categories;
