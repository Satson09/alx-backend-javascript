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

