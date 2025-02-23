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
 * 29 - APIs and V8 engine
 * 30 - promises
 * 31 - fetch API
 * 32 - OOP
 * 33 - prototype
 * 34 - call
 * 35 - class
 * 36 - bind
 * 37 - getter and setter
 * 38 - closure and lexical scoping
 * 39 - advanced Array
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

// Promises
/**
 * an object representing eventual completion or failure of an async operation
 * 3 states - fulfil or resolve, pending, reject
 * alternatives - Q, BlueBird
 * creation and consumption
 * then() executes only when resolve() is executed - chaining
 *
 */

const samplePromise = new Promise((resolve, reject) => {
    // do async tasks such as DB calls, encrypt, network
    setTimeout(() => {
        console.log("async task done");
        const error = true;
        if (!error) {
            resolve({ key1: "value1", key2: "value2" }); // this is connected to then()
        } else {
            reject("Something went wrong loki!!. Fix it!");
        }
    }, 1000);
});

samplePromise
    .then((data) => {
        // only executes when resolve() is called
        console.log("Promise is consumed");
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("promise is either resolved or rejected");
    });
async function otherPromise() {
    try {
        const result = await samplePromise();
        console.log(result);
    } catch (error) {
        console.log(error, "Gone wrong");
    }
}
otherPromise();

// promise creation using try-catch and async-await
async function somefunc() {
    try {
        const url = ""; // set url here
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error is ", error);
    }
}
somefunc();

// promise creation using then-catch
const url = ""; // set url here
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error time", error);
    });

// Fetch API
/**
 * response = fetch('something')
 * 1. data - (private fields) onFulfiled[], onRejection[]
 * 2. web browser/node - network segment
 */

// OOP - a programming paradigm
/**
 * js is a prototype-based language
 * object - collection of properties and methods
 * constructor function
 * prototypes
 * classes
 * instances(new, this)
 * 4 pillars - abstraction (hiding details like fetch()), encapsulation (wrapper), inheritance, polymorphism
 * new keyword usage and significance
 * 1. instance (an empty object) is created
 * 2. prototype is linked
 * 2. constructor is called
 * 3. this keyword is injected
 */

// Prototypes
/**
 * javascript - prototypal behaviour and inheritance
 * (Array,String,Function) -> Object -> null
 * inheritance
 * 1. __proto__ - legacy
 * 2. setPrototypeOf() -
 */

// custom prototype
someObjectName.prototype.somePrototypeName = function () {
    this.someAttribute++;
};
// someObjectName can be Object, Array, ...

// call is used to hold the reference of a function defined outside
function outsideFunction(param) {
    this.param = param;
}

function someFunction(param1, param2) {
    outsideFunction.call(this, param1);
    this.param2 = param2;
}

const someObj = new someFunction("firstval", "secondval");

// classes - constructor, inheritance, super(), new, instanceof, static props,

// bind - React example - this.handleClick.bind(this) - legacy

// getter and setter come together - fn, class, obj
// race condition - RangeError: maximum call stack size exceeded
// _ represents private

class GetterSetterClass {
    constructor(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
    }
    get param1() {
        return `${this._param1}loki`;
    }
    set param1(val) {
        this._param1 = val;
    }
}

function getterSetterFunction(param1, param2) {
    // legacy
    this._param1 = param1;
    this._param2 = param2;

    Object.defineProperty(this, "param1", {
        get: () => this._param1,
        set: function (val) {
            this._param1 = val;
        },
    });
}

const getterSetterObject = {
    _param1: "someVal1",
    _param2: "someVal2",
    get param1() {
        return this._param1;
    },
    set param1(val) {
        this.param1 = val;
    },
};

// lexical scope is also shared in case of closures
// lexical scope + function is returned

// ARRAY OPTIMISATION TYPES
// 1. continuous, Holey
// 2. SMI (small integer), Packed element, Double (float,string,function)
// PACKED_SMI_ELEMENTS(1,2,3), PACKED_DOUBLE_ELEMENTS(2.9), PACKED_ELEMENTS('777')
// HOLEY_ELEMENTS (holes are expensive in js, prototype or bound check)

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

// use push to get atleast some optimisation

// can't go less optimised to more optimised

// use these instead - for, for-of, forEach as these are already optimised
