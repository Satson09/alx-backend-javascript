<<<<<<< HEAD
const Utils = {
  calculateNumber(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    switch (type) {
      case 'SUM':
        return roundedA + roundedB;
      case 'SUBTRACT':
        return roundedA - roundedB;
      case 'DIVIDE':
        if (roundedB === 0) {
          return 'Error';
        }
        return roundedA / roundedB;
      default:
        throw new Error('Invalid operation type');
    }
  },
};

module.exports = Utils;

=======
class Utils {
    static calculateNumber(type, a, b) {
	const an = Math.round(a);
	const bn = Math.round(b);
	let c = 0;
	switch (type) {
	case 'SUM':
            c = an + bn;
            break;
	case 'SUBTRACT':
            c = an - bn;
            break;
	case 'DIVIDE':
	    if (bn === 0) {
		c = "Error";
	    } else {
		c = an / bn;
	    }
	    break;
	}
	return c;
    }
}

module.exports = Utils;
>>>>>>> 1975a3eaadb4a3fa9fe1355dfa16e0e52f13ab85
