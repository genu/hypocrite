var expect = require('chai').expect;
var hypocrite = require('../src/index.js');

describe('hypocrite', function() {
  describe('GET', function() {
    it('should be hello', function() {
      expect(hypocrite.GET()).to.eq('hello');
    });
  });

  describe('POST', function() {});
  describe('PUT', function() {});
  describe('PATCH', function() {});
  describe('DELETE', function() {});
});
