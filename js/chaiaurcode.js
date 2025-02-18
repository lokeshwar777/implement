/**
 * 1 - intro video
 * 2 - env setup
 * 3 - let var const
 * 4 - datatypes
 * 5 - conversions
 * 6 - string to number
 * 7 - comparisions
 * 8 - memory allocation (stack and heap)
 * 9 - string methods
 * 10 - math methods
 * 11 - number methods
 * 12 - date and time methods
 * 13 - array methods
 * 14 - **INCOMPLETE**
 */

let variable1 = "firstVal";
var variable2 = 2;
const variable3 = 1e9 + 7;
variable4 = "possible"; // when use strict is not used

console.table([variable1, variable2, variable3, variable4]);

// "use strict";
// TODO : research more about use strict

// DOCS - mdn and ecma script

// Datatypes - number(2^), bigint, string, boolean, null, undefined, symbol, object
// null is a representation of empty value, standalone value, it is an object
// symbol is used for uniqueness of a component
// Stack - Primitive (7) : String, Number, Boolean, null, undefined, Symbol, BigInt
// Heap - Reference (Non primitive) : Array, Objects, Functions

// typeof
// TODO : have fun - try out all possible conversions and comparisions

// use parenthesis, readability and clean code is very important

// use `` - string interpolation

const firstName = new String("Harvey");
console.log(firstName.__proto__);

// TODO : explore string methods
// TODO : explore number methods
// TODO : explore math methods
// TODO : explore date methods
// TODO : explore array methods
