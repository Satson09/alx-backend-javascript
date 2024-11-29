
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(function () {
    // Stub Utils.calculateNumber to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the stub and the spy
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', function () {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnce).to.be.true; // Ensure the stub was called once
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true; // Ensure the stub was called with the correct arguments
  });

  it('should log the correct message', function () {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnce).to.be.true; // Ensure console.log was called once
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true; // Ensure the correct message was logged
  });
})

const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber is stubbed", function() {
	const spy = sinon.spy(console, "log");
	const stub = sinon.stub(Utils, "calculateNumber").returns(10);
	sendPaymentRequestToApi(100, 20);

	assert(spy.withArgs("The total is: 10").calledOnce);
	assert(stub.withArgs("SUM", 100, 20).calledOnce);
    });
});
