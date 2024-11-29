const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 4 when inputs are 1 and 3', function () {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when inputs are 1.2 and 3.7', function () {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should handle negative numbers', function () {
      assert.strictEqual(calculateNumber('SUM', -1.4, -3.6), -5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -2 when inputs are 1 and 3', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('should return 2 when inputs are 3.7 and 1.2', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 2);
    });

    it('should handle negative numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -3.6), 2);
    });
  });

  describe('DIVIDE', function () {
    it('should return 2 when inputs are 8 and 4', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 8, 4), 2);
    });

    it('should return 2.5 when inputs are 5.5 and 2.1', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.1), 2.5);
    });

    it('should return "Error" when dividing by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
    });

    it('should return "Error" when rounded divisor is 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 0.3), 'Error');
    });
  });

  describe('Invalid operation type', function () {
    it('should throw an error for invalid type', function () {
      assert.throws(() => calculateNumber('INVALID', 1, 3), {
        name: 'Error',
        message: 'Invalid operation type',
      });
    });
  });
});

