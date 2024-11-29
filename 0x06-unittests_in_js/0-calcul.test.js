
const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe('calculateNumber', function () {

  it('should return 4 when inputs are 1 and 3', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1 and 3.7', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers correctly', function () {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });

  it('should return the rounded sum of two large numbers', function () {
    assert.strictEqual(calculateNumber(1000.1, 2000.9), 3001);
  });

  it('should handle one number being 0', function () {
    assert.strictEqual(calculateNumber(0, 4.5), 5);
  });
});

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

