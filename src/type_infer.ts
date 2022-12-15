// checking that type of msg is automatically inferred.
let msg = "hello there!";

const upperMsg = msg.toUpperCase();
// Following invokes type error on transpilation as a string type value cannot be used in arithmetic operations.
// const errorneous = msg/3;

// Unfortunately, the following is compiled as ts is ultimately a javascript, a dynamically-typed language.
//const possible = msg + 2;
// this is also possible;
//let number: number = 2;
//const possible = msg + number;  // string + number is defined in js, so this can be compiled ...


// in order to ensure consistency in the code above,
// use string.concat()
let num3 = 3;
const impossible = "Hello".concat(num3) // This DOES run on JS, never transpiled in TS



// Or you need to define this:
function addStringOnly(s1: string, s2: string) {
	return s1 + s2;
}

const notTranspiled = addStringOnly(3, " bananas");
const transpiled = addStringOnly("3", " bananas");
