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

/*
Other useful flags
- noImplicitReturns  // returns must be explicitly declared
- noImplicitOverride // prevents accidental method overriding
- noFallThrough // prevents switch cases without break statement
- exactOptionalPropertyTypes // prevents existence of unwanted `undefined` type instance of an optional value with `?`
- noPropertyAccessFromIndexSignature // prevents accidental access to a non-existent field with dot syntax etc.
- noUncheckedIndexedAccess // ensures all access to a not-declared field addresses possibilities of being `undefined`
- noUnusedLocals // prevents any not-used local var/const
- noUnusedParameters // prevents any prameters never used in the scope
- 
*/

let num2 = 2; // implicit type inferring is still possible
let greeting = "Hello, ";

/*
// not transpiled: `strictFunctionTypes`
function sayHelloTo(s: string) {
	console.log("Hello, " + s.toLowerCase());
}
type strORnumFN = (uncertain: string | number) => void;

let func: strORnumFN = sayHelloTo; // unsafe as `strORnumFN` type cannot ensure that the arg is of `string` type
func(3); // unsafe call, crashes
*/

/* // NEEDS -lib DOM,ES6 compiler option
// not transpiled: `strictNullChecks`
// this prevents exsistence of implicit `undefined` or `null` values in some edge cases
let locatedCountry = "Canada";
type country = { name: string, capital: string };
const germany: country = {name: "Germany", capital: "Berlin"};
const japan: country = {name: "Japan", capital: "Tokyo"};
const france: country = {name: "France", capital: "Paris"};
const countries: country[] = [germany, japan, france];

const foundPlace = countries.find((c: country) => c.name === locatedCountry);  // if no match was found returns `undefined`
console.log(foundPlace.capital);
*/

// not transpiled: `noImplicitAny`
//function incrementNum(num2) {
//	num2 += 1;
//}

// not transpiled: `noImplicitThis`
//import strictTS from "strictTS";
class Square {
	side: number = 1;
	constructor(sqSide?: number) {
		if (sqSide !== undefined) {
			this.side = sqSide;
		}
	}

//	getSide(): number {
//		return implicitThisScope() {
//			// here inside of implicitThisScope(), `this` is not explicit;
//			// use function(this) or just `return this.side` instead of lambda
//			return this.side;
//		}
//	}
}

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
