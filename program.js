////
// Initial Setup
////
document.writeln('Initial Setup');
Function.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;
};




////
// Object Literal
////
document.writeln('<br />Object Literal');
var empty_object = {};

var stooge = {
	"first-name": "Jerome",
	"last-name": "Howard"
};

var flight = {
	airline: "Oceanic",
	number: 815,
	departure: {
		IATA: "SYD",
		time: "2004-09-22 14:55",
		city: "Sydney"
	},
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10:42",
		city: "Los Angeles"
	}
};




////
// Prototype
////
document.writeln('<br />Prototype');
if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}
var another_stooge = Object.create(stooge);
     
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

stooge.profession = 'actor';
document.writeln(another_stooge.profession);




////
// Enumeration
////
document.writeln('<br />Enumeration');
var name;
for (name in another_stooge) {
	if (typeof another_stooge[name] !== 'function') {
		document.writeln(name + ': ' + another_stooge[name]);
	}
}
var i;
var properties = [
	'first-name',
	'middle-name',
	'last-name',
	'profession'
];
for (i = 0; i < properties.length; i += 1) {
	document.writeln(properties[i] + ': ' + another_stooge[properties[i]]);
}




////
// Delete
////
document.writeln('<br />Delete');
document.writeln(another_stooge.nickname);
delete another_stooge.nickname;
document.writeln(another_stooge.nickname);




////
// Global Abatement
////
document.writeln('<br />Global Abatement');
var MYAPP = {};
MYAPP.stooge = {
	"first-name": "Joe",
	"last-name": "Howard"
};
MYAPP.flight = {
	airline: "Oceanic",
	number: 815,
	departure: {
		IATA: "SYD",
		time: "2004-09-22 14:55",
		city: "Sydney"
	},
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10:42",
		city: "Los Angeles"
	}
};
