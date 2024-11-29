/**const assert = require('assert');
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

const calculateNumber = require('./1-calcul');

describe('#calculateNumber() with type SUM', () => {
  it('add 5 and 10', () => {
    assert.equal(calculateNumber('SUM', 5, 10), 15);
  });
  it('add 2 and 2.7', () => {
    assert.equal(calculateNumber('SUM', 2, 2.7), 5);
  });
  it('add 1.0 and 4.0', () => {
    assert.equal(calculateNumber('SUM', 1.0, 4.0), 5);
  });
  it('add 1.7 and 3.5', () => {
    assert.equal(calculateNumber('SUM', 1.7, 3.5), 6);
  });
  it('should return 0 when adding 0.1 and 0.3', () => {
    assert.equal(calculateNumber('SUM', 0.1, 0.3), 0);
  });
  it('add -0.7 and 0.7', () => {
    assert.equal(calculateNumber('SUM', -0.7, 0.7), 0);
  });
  it('add -0.8 and -0.7', () => {
    assert.equal(calculateNumber('SUM', -0.8, -0.7), -2);
  });
});

describe('#calculateNumber() with type SUBTRACT', () => {
  it('subtract 1 and 3', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('subtract 1.4 and 4.5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('subtract 1.2 and 3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });
  it('subtract 1.5 and 3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  it('subtract 0.1 and 0.3', () => {
    assert.equal(calculateNumber('SUBTRACT', 0.1, 0.3), 0);
  });
  it('subtract -0.7 and 0.7', () => {
    assert.equal(calculateNumber('SUBTRACT', -0.7, 0.7), -2);
  });
  it('subtract -0.8 and -0.7', () => {
    assert.equal(calculateNumber('SUBTRACT', -0.8, -0.7), 0);
  });
  it('subtract 0.8 and -0.4', () => {
    assert.equal(calculateNumber('SUBTRACT', 0.8, -0.4), 1);
  });
});

describe('#calculateNumber() with type DIVIDE', () => {
  it('divide 1 and 4', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 4), 0.25);
  });
  it('divide 1 and 3.7', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
  });
  it('divide 1.4 and 4.5', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('divide 1.6 and 2.4', () => {
    assert.equal(calculateNumber('DIVIDE', 1.6, 2.4), 1);
  });
  it('divide 4.2 and 1.5', () => {
    assert.equal(calculateNumber('DIVIDE', 4.2, 1.5), 2);
  });
  it("divide 1.3 and 0.3", () => {
    assert.equal(calculateNumber('DIVIDE', 1.3, 0.3), 'Error');
  });
  it('divide -0.7 and 0.7', () => {
    assert.equal(calculateNumber('DIVIDE', -0.7, 0.7), -1);
  });
  it('divide -0.8 and -0.7', () => {
    assert.equal(calculateNumber('DIVIDE', -0.8, -0.7), 1);
  });
  it('divide -44.5 and 2.4', () => {
    assert.equal(calculateNumber('DIVIDE', -44.5, 2.4), -22);
  });
  it('divide -88.5 and -3.6', () => {
    assert.equal(calculateNumber('DIVIDE', -88.5, -3.6), 22);
  });
});*/

const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it(`checking if numbers round`, function() {
      const res = calculateNumber("SUM", 1, 2);
      assert.strictEqual(res, 3);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("SUBTRACT", 1.4, 2.2);
      assert.strictEqual(res, -1);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("SUBTRACT", 4.9, 2.7);
      assert.strictEqual(res, 2);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("DIVIDE", 4, 2);
      assert.strictEqual(res, 2);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("DIVIDE", 1.7, 0);
      assert.strictEqual(res, "Error");
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("DIVIDE", 1.4, 4.6);
      assert.strictEqual(res, 0.2);
    });
});
