const Categories = require('../../models-singular/categories');
let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    console.log(categories.schema);
  });

  it('can get() a category', () => {
  });

  it('can get() all categories', () => {
  });

  it('can update() a category', () => {
  });

  it('can delete() a category', () => {
  });

});