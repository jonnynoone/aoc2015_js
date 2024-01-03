const fs = require('node:fs');
const data = fs.readFileSync('data.txt', 'utf8');
const rows = data.split('\r\n');

let counter = 0;
for (let row of rows) {
	if (hasVowels(row) && hasDuplicate(row) && isClean(row)) {
		counter++;
	}
}

function hasVowels(string) {
	let vowels = 0;
	for (let char of string) {
		if (
			char === 'a' ||
			char === 'e' ||
			char === 'i' ||
			char === 'o' ||
			char === 'u'
		) {
			vowels++;
		}
	}

	if (vowels >= 3) return true;
}

function hasDuplicate(string) {
	let duplicate = false;
	for (let i = 0; i < string.length; i++) {
		if (i < string.length - 1) {
			if (string[i] === string[i + 1]) {
				duplicate = true;
			}
		}
	}

	return duplicate;
}

function isClean(string) {
	let clean = true;
	if (
		string.includes('ab') ||
		string.includes('cd') ||
		string.includes('pq') ||
		string.includes('xy')
	) {
		clean = false;
	}

	return clean;
}

console.log(counter);
