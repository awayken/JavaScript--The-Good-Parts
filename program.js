////
// Initial Setup
////
document.writeln('Initial Setup');
Function.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;
};




////
// Function Literal
////
document.writeln('<br />Function Literal');
var add = function (a, b) {
	return a + b;
};




////
// Invocation
////
document.writeln('<br />Method Invocation Pattern');
var myObject = {
	value: 0,
	increment: function (inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	}
};
myObject.increment( );
document.writeln(myObject.value);
myObject.increment(2);
document.writeln(myObject.value);
