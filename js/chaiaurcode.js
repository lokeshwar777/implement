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
 * 14 - object methods
 * 15 - destructuring and JSON
 * 16 - functions
 * 17 - scope
 * 18 - this keyword - current context for classes and objects
 * 19 - arrow function
 * 20 - IIFE
 * 21 - execution context
 * 22 - truthy and falsy values
 * 23 - Higher order array loops
 * 24 - map,reduce,filter
 * 25 - DOM (Document Object Model) - small stackblitz projects
 * 26 - events
 * 27 - Async JS
 * 28 - timers
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

// symbol as a key in an object
const sym1 = Symbol("key1");
const obj = { normal: "normal val", [sym1]: "value1" }; // just sym1 is stored as a string
console.log(obj[sym1]);
console.log(obj["normal"]);
// console.log(obj[normal]); // ?
console.log(obj.normal);

// functions
function multipleArgs(arg1, arg2, ...args) {
    // arg1,arg2-variables, args-array
    console.log(args);
}

console.log(addTwoNumbers(1, 2));
// console.log(expression(1, 2)); // gives you error, hoisting
function addTwoNumbers(arg1, arg2) {
    return arg1 + arg2;
}
const expression = function (arg1, arg2) {
    return arg1 + arg2;
};

// we do not have access to `this` in function and arrow function
// console.log(this); // try out in all locations
// global object in browser - window
// global object in node - {}

// arrow function -
// 1. implicit return
// 2. explicit return for { } block
// 3. {{}} if you want to return an object

// IIFE - Immediately Invoked Function Expression
// 1. the function which executes immediately
// 2. to remove global scope pollution from variables
// 3. ; is important if you want 2 IIFEs in 1 file
(function iife(arg) {})("param"); // named IIFE
((arg) => {})("param"); // unnamed or simple IIFE

// Javascript execution context
/**
 * global execution context (this) - different for browser,node,deno,bun,...
 * function execution context -
 * eval execution context -
 * 2 phases - memory creation phase, execution phase
 * new exection context - new variable environment + exection thread
 * inspect->sources->snippets - visualise all this process
 *
 */

// falsy values - false,0,-0,BigInt On,"",null,undefined,NaN
// truthy values - (remaining), "0",'false'," ",[],{},function(){}
// arrays and objects - check for length
// == vs ===

// Nullish Coalescing Operator (??) - only for null undefined
// first value which you get is assigned
let val1 = null ?? "first val" ?? "second val";
let val2 = undefined ?? "first val" ?? "second val";

// ["","",""], [{},{},{}] - general JSON data

// Events;
/**
 * use reference of a function for onClick
 * event propogation - bubbling(inside to outside) and capturing(ancestor to child)
 * event listener
 */

// Stackblitz DOM projects
/**
 * color changer
 * BMI calculator
 * digital running clock
 * Guess the number
 *
 */
