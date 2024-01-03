const md5 = require('./md5.js');

const secretKey = 'bgvyzdsv';
let found = false;
let counter = 1;

while (!found) {
	let hash = md5(secretKey + counter);

	if (hash.slice(0, 6) === '000000') {
		console.log(counter);
		found = true;
	}

	counter++;
}
