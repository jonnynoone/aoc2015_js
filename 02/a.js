const fs = require('node:fs');
const data = fs.readFileSync('data.txt', 'utf8');

let rows = data.split('\n');
let total = 0;

for (let i = 0; i < rows.length; i++) {
	let dimensions = rows[i].split('x');

	let length = dimensions[0];
	let width = dimensions[1];
	let height = dimensions[2];

	const sides = Array();
	sides[0] = length * width;
	sides[1] = length * height;
	sides[2] = width * height;

	let surfaceArea = 2 * sides[0] + 2 * sides[1] + 2 * sides[2];

	let smallestSide;
	if (sides[0] <= sides[1] && sides[0] <= sides[2]) {
		smallestSide = sides[0];
	} else if (sides[1] <= sides[0] && sides[1] <= sides[2]) {
		smallestSide = sides[1];
	} else if (sides[2] <= sides[0] && sides[2] <= sides[1]) {
		smallestSide = sides[2];
	}

	total += surfaceArea + smallestSide;
}

console.log(total);
