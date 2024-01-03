const fs = require('node:fs');
const directions = fs.readFileSync('data.txt', 'utf8');

const location = {
	x: 0,
	y: 0,
};

const visited = [];
visited.push(Object.assign({}, location));

for (let i = 0; i < directions.length; i++) {
	if (directions[i] === '>') {
		location.x += 1;
	} else if (directions[i] === '<') {
		location.x -= 1;
	} else if (directions[i] === '^') {
		location.y += 1;
	} else if (directions[i] === 'v') {
		location.y -= 1;
	}

	let exists = false;
	for (let j = 0; j < visited.length; j++) {
		if (visited[j].x === location.x && visited[j].y === location.y) {
			exists = true;
		}
	}

	if (!exists) {
		visited.push(Object.assign({}, location));
	}
}

console.log(visited.length);
