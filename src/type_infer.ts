// checking that type of msg is automatically inferred.
let msg = "hello there!";

const upperMsg = msg.toUpperCase();
// Following invokes type error on transpilation as a string type value cannot be used in arithmetic operations.
// const errorneous = msg/3;

// Unfortunately, the following is compiled as ts is ultimately a javascript, a dynamically-typed language.
//const possible = msg + 2;
// this is also possible;
//let number: number = 2;
//const impossible = msg + number;  // string + number is defined in js, so this can be compiled ...

