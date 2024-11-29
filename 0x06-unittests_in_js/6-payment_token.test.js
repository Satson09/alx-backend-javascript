
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with correct data when success is true', function (done) {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.be.an('object'); // Check if the response is an object
      expect(response).to.have.property('data', 'Successful response from the API'); // Check for correct property and value
      done(); // Notify Mocha that the test is complete
    }).catch((err) => done(err)); // Ensure errors fail the test
  });
});

const getPaymentTokenFromAPI = require("./6-payment_token");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("getPaymentTokenFromAPI", function() {
    it("Async testing with done callback", function(done) {
	getPaymentTokenFromAPI(true)
	    .then((data) => {
		expect(data).to.have.property('data');
		done();
	    });
    });
});

