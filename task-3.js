var chess = '';
var count = 8;

for (var i = 0; i < count; i++) {
	for (var j = 0; j < count; j++) {
		if ((i + j) % 2 === 0) {
			chess += '◻';
		} else {
			chess += '◼';
		}
	};
	chess += '\n';
};
 
console.log(chess);

