const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const menu = require('../../../server/data/menu.json');

describe('menuCtrl', function() {
    context('menu items', function() {
        it('should return an object 156 menu item objects', function() {
            let count = Object.keys(menu).length;

            count.should.equal(156);
        });
    });
    context('each menu item', function() {
        it('should have the same keys', function() {
            let menuKeysArray = [];

            menu.forEach(function(element) {
               menuKeysArray.push(Object.getOwnPropertyNames((element)));
            });
            menuKeysArray.every((i) => expect(i).to.contain.members(
                [
                    'Category',
                    'Item',
                    'Description',
                    'Size',
                    'Price']));
        });
    });
});
