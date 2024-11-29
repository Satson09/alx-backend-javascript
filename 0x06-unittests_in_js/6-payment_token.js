function getPaymentTokenFromAPI(success) {

  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
}

module.exports = getPaymentTokenFromAPI;


    if (success) {
	return new Promise((resolve) => {
          resolve({data: 'Successful response from the API' });
	});
    }
}

module.exports = getPaymentTokenFromAPI;
