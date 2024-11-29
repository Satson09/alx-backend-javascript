
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

const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
    beforeEach("Set up spy to use for each test", function() {
	sinon.spy(console, "log");
    });
    afterEach("restore spy after each test", function() {
	console.log.restore();
    });
    it("check that console.log is called with the right arg", function() {
	sendPaymentRequestToApi(100, 20);

	expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
    });
    it("check that console.log is called with the right arg", function() {
	sendPaymentRequestToApi(10, 10);

	expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
    });
});

