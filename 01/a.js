const fs = require('node:fs');
const data = fs.readFileSync('data.txt', 'utf8');

let floor = 0;

for (let i = 0; i < data.length; i++) {
	if (data[i] === '(') {
		floor++;
	} else if (data[i] === ')') {
		floor--;
	}
}

console.log(floor);
