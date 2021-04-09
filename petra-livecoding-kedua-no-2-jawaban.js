
function formTrainSeating(passengers) {
var a = [];
var b = [];
var c = [];
var d = [];
var e = [];
var pushall = [];
for (i = 0;i<passengers.length;i++){
	if (passengers[i] === 'A'){
		a.push('A');
	}
	else if (passengers[i] === 'B'){
		b.push('B');
	}
	else if (passengers [i] === 'C'){
		c.push('C');
	}
	else if ( passengers[i] === 'D'){
		d.push('D');
	}
	else {
		e.push('E');
	}
	}
	pushall.push(a,b,c,d,e);
	return pushall
}

console.log(formTrainSeating('ABDCCCE')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]
