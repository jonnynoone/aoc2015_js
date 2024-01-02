const fs = require('node:fs');
const data = fs.readFileSync('data.txt', 'utf8');

let rows = data.split('\r\n');
let total = 0;

for (let i = 0; i < rows.length; i++) {
	let dimensions = rows[i].split('x');

	let length = Number(dimensions[0]);
	let width = Number(dimensions[1]);
	let height = Number(dimensions[2]);

	let ribbon;
	if (length >= width && length >= height) {
		ribbon = 2 * width + 2 * height;
	} else if (width >= length && width >= height) {
		ribbon = 2 * length + 2 * height;
	} else if (height >= length && height >= width) {
		ribbon = 2 * length + 2 * width;
	}

	let bow = length * width * height;

	total += ribbon + bow;
}

console.log(total);
