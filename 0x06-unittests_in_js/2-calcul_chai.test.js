const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return the sum of two rounded numbers', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6); // 1 + 5 = 6
    });
  });

  describe('SUBTRACT', function () {
    it('should return the subtraction of two rounded numbers', function () {
      expect(calculateNumber('SUBTRACT', 5.7, 3.2)).to.equal(3); // 6 - 3 = 3
    });
  });

  describe('DIVIDE', function () {
    it('should return the division of two rounded numbers', function () {
      expect(calculateNumber('DIVIDE', 9.5, 2.1)).to.be.closeTo(5, 0.01); // 10 / 2 = 5
    });

    it('should return "Error" when dividing by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error'); // Division by 0
    });
  });
});

