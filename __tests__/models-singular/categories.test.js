const Categories = require('../../models-singular/categories');
let categories = new Categories();

let categoryID;

require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    let test = { name: 'Test', description: 'Description' };
    return categories.create(test).then(result => {
      categoryID = result._id;
      expect(result.name).toEqual('Test');
      expect(result.description).toEqual('Description');
    });
  });

  it('can get() a category', () => {
    return categories.get(categoryID).then(result => {
      expect(result[0].name).toEqual('Test');
      expect(result[0].description).toEqual('Description');
    });
  });

  it('can get() all categories', () => {
    return categories.get().then(result => {
      expect(result[0].name).toEqual('Test');
      expect(result[0].description).toEqual('Description');
    });
  });

  it('can update() a category', () => {
    return categories.update({_id : categoryID}, {description: 'New description'}).then(result => {
      expect(result).toEqual({ n: 1, nModified: 1, ok: 1 });
      return categories.get(categoryID).then(result => {
        expect(result[0].description).toEqual('New description');
      });
    });
  });

  it('can delete() a category', () => {
    return categories.delete(categoryID).then(result => {
      expect(result).toEqual({ n: 1, ok: 1, deletedCount: 1 });
      return categories.get(categoryID).then(result => {
        expect(result.length).toEqual(0);
      });
    });
  });

});