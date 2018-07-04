const expect = require('chai').expect;
const should = require('chai').should;
const assert = require('chai').assert;

should();

const sum = (a, b) => a + b;

describe('Hello', function() {

  describe('#sum()', function() {
    it('should return 3 when params are 1 and 2', function() {

      // BDD style
      expect(sum(1, 2)).to.equals(3);

      // BDD style
      sum(1, 2).should.be.equals(3);

      // TDD style
      assert.strictEqual(sum(1, 2), 3);
    });
  });

  describe('#setTimeout()', function() {
    it('should call cb in 100ms', function(done) {
      setTimeout(() => {
        expect(true).to.be.true;
        done();
      }, 100);
    });
  });

});
