// use tsc --strict
/*
"strict" option enables the following flags:
- strictNullChecks
- strictBindCallApply
- strictFunctionTypes
- strictPropertyInitialization
- noImplicitAny
- noImplicitThis
- useUnknownInCatchVariables
*/

let num2 = 2; // implicit type inferring is still possible
let greeting = "Hello, ";


// not transpiled: `noImplicitAny`
//function incrementNum(num2) {
//	num2 += 1;
//}

// can be transpiled: `useUnknownInCatchVariables`
try {
	console.log("Hello, ".concat("z"));
} catch (err) {
	// we don't know if the thing catched here is actually an Error instance...
	// thus err is best to be `unknown` type

	if (err instanceof Error) {
		// print only if validated to be an Error instance.
		console.log(err.message);
	} else {
		console.log(typeof err + " was catched");
	}
}
