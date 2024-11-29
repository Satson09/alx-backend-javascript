const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  // Hook to run before each test
  beforeEach(function () {
    consoleSpy = sinon.spy(console, 'log'); // Spy on console.log
  });

  // Hook to run after each test
  afterEach(function () {
    consoleSpy.restore(); // Restore console.log
  });

  it('should log "The total is: 120" when called with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnce).to.be.true; // Ensure console.log was called once
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true; // Ensure correct log message
  });

  it('should log "The total is: 20" when called with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnce).to.be.true; // Ensure console.log was called once
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true; // Ensure correct log message
  });
});

