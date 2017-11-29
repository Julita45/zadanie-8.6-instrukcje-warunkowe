var a = 2,
	b = 3;
var value; 

a = prompt('enter a', a);
b = prompt('enter b', b);

value = (a * a) - (2 * a * b) + (b * b);

if (value > 0) {
	alert('Value is positive');
	console.log('Value is positive');
} 	else if (value < 0) {
		alert('Value is negative');
		console.log('Value is negative');
}
	else if (value === 0) {
		alert('Value is zero');
		console.log('Value is zero');
}
	else {
		alert('Invalid data');
		console.log('Invalid data');
}