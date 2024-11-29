const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments', function () {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true; // Ensure it was called once
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true; // Ensure it was called with the right arguments

    calculateNumberSpy.restore(); // Restore the original function
  });
});

