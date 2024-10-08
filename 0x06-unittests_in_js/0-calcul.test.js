// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when 1 and 3 are passed', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when 1 and 3.7 are passed', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when 1.2 and 3.7 are passed', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when 1.5 and 3.7 are passed', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 when 0 and 0 are passed', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});

