/** Completed
 * 1 - Get Started
 * 2 - Linking js file - defer
 * 3 - string and number methods, NaN
 * 3 - NaN, isNan()
 * 4 - math methods
 * 5 - random letter generation
 * 7 - if else condition
 * 8 - switch statements
 * 9 - ternary operators - chaining
 * 10 - user input - alert(), prompt()
 * 11 - rock paper scissors
 * 12 - loops - for, while, do while,
 * 13 - functions - reusable code, function(){}, ()=>{}
 * 14 - scope - {} - var, let, const - global, function, block
 * 15 - Arrays
 * 17 - Objects - {key:value} pairs, destructuring
 * 18 - class
 * 19 - JSON
 * 20 - errors
 * 21 - DOM
 * 22 - Event listeners
 * 23 - Web storage API - local and session storage
 * 24 - modules
 * 25 - Higher Order functions
 * 26 - Fetch API - callbacks, promises, thenables, async/await
 * 27 - Regex
 * 28 - Closures - lexical,global scopes
 * 29 - __proto__ - object literals,constructors - object and class
 * 30 - recursion - readability
 * 31 - currying - making nested functions more readable () => () => {}
 * 32 - copies/clones - shallow + deep,primitives + structural, mutable + immutable, vanillaJS + library solutions
 * 33 - pure + impure functions - data mutation, referencial transparency
 * 34 - IIFE - iffy, reasons, variations, revealing pattern, injecting a namespace
 * 35 - functional programming - pipe, compose - pros and cons
 * 36 - debounce - limits frequent calls by delaying executing until inactivity
 * 37 - throttle - limits frequent calls by allowing execution at regular intervals
 * 38 - memoisation - closure + cache
 * 39 - testing -
 */

// ?? - nullish coalsing operator

// global is not desirable
// local - in a function or block
// let, const - block scope

// Objects
// "" quotes are not mandatory for keys
// values can be access using . and []
// you can't access like this obj."some key"

// Classes
class ClassName {
    publicField = "This is a public field";
    #privateField1 = "This is a private field";
    #attribute2; // can't be accessed outside the class
    // PascalCase
    constructor(param1, param2) {
        this.attribute1 = param1; // not safe
        // this._attribute2 = param2; // private, but can be accessed outside the class using _attribute2
        this.#attribute2 = param2; // use this instead
    }
    getAttribute1() {
        return this.attribute1;
    }
    setAttribute1(newVal) {
        this.attribute1 = newVal;
    }
    method1() {
        // console.log(
        //     `We have ${this.attribute1} and ${this._attribute2} instance properties or member variables.`
        // );
        console.log(
            `We also have ${this.#privateField1} and ${
                this.#attribute2
            } private fields.`
        );
    }
}

let arg1 = "some value";
let arg2 = 777;
const instanceName = new ClassName(arg1, arg2);
// instanceName.param1 = "new value"; // this is not desired as it updates the value
console.log(instanceName.method1());
console.log(instanceName.getAttribute1());
instanceName.setAttribute1("updated value");
console.log(instanceName.getAttribute1());

class ChildClass extends ClassName {
    constructor(param3) {
        super(param3);
        this.attribute3 = param3;
    }
    method2() {
        console.log(`We can access ${this.attribute1} from parent class`);
    }
}

const childInstance = new ChildClass("child value");
childInstance.method2();

// Factory function
function factoryFunction(param) {
    const var1 = "some value";
    const var2 = param;
    return {
        methodName: () =>
            console.log(`We have var1 as ${var1} and var2 as ${var2}`),
    };
}

const functionInstance = factoryFunction("passed value");
functionInstance.methodName();

// use - caniuse.com for browser support checking

// JSON
const obj = {
    key1: "value1",
    key2: "value2",
};
const sendJSON = JSON.stringify(obj);

// errors
// MDN error constructor types
("use strict");

const makeError = () => {
    try {
        // const var1 = "Fixed value";
        // var1 = "new value";
        // throw new Error("This is a loki created error"); // generic error constructor
        throw new lokiCustomError("This is a loki created error");
    } catch (e) {
        // console.log(e);
        // console.error(e.stack);
        console.error(e.name);
        console.error(e.message);
        console.error(e.stack);
    } finally {
        console.log("finally doesn't care what's going on");
    }
};

function lokiCustomError(msg) {
    this.message = msg;
    this.name = "lokiCustomError";
    this.stack = `${this.name}: ${this.message}`;
}

// Web Storage API
sessionStorage.setItem(sessionName, objName);
sessionStorage.setItem(sessionName, JSON.stringify(objName));
JSON.parse(sessionStorage.getItem(sessionName));

// persistent data
localStorage.setItem(localName, objName);
localStorage.setItem(localName, JSON.stringify(objName));
JSON.parse(localStorage.getItem(localName));
localStorage.removeItem(localName);
localStorage.clear();
localStorage.key(index);

// modules
/**
 * import and exports for functions and classes
 * type="module" also includes defer
 * "use strict" is default for modules
 * we do not need {} for default exports
 * modules need babel(transpiler)+(webpack or parcel)(bundler)
 */

export default function func1() {}

export function func2() {}
export const func3 = () => {};

import * as general from "path";
general.default(); // correct usage for using func1 so instead do not use default
general.func2();

// Higher order function
/**
 * does atleast 1 of :
 * 1. takes atleast 1 function an argument (params)
 * 2. returns a function
 */

// Promises - 3 states: Pending, Fulfilled, Rejected

const prom1 = new Promise((resolve, reject) => {
    const err = false;
    if (!err) {
        resolve("Yes, the promise is resolved");
    } else {
        resolve("No, the promise is rejected");
    }
});

// thenables
prom1
    .then((val) => {
        console.log(val);
        return val + 1;
    })
    .then((newVal) => {
        console.log(newVal);
    })
    .catch((err) => {
        console.error(err);
    });

// pending state

// Async / Await + fetch API

const awaitAsyncObj = {
    responseList: [],
};

const someAsyncAwait = async () => {
    const stringResponse = await fetch("someurl");
    const jsonData = await stringResponse.json();
    const jsonResponse = await fetch("someurl", {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    });
    const jsonDataWithStatusCode = await jsonResponse.json();
    const textResponse = await fetch("someurl", {
        method: "GET",
        headers: {
            Accept: "text/plain",
        },
    });
    return jsonData;
};

const anotherAsyncAwait = async () => {
    const data = await someAsyncAwait();
    awaitAsyncObj.responseList = data;
};

anotherAsyncAwait();
console.log(awaitAsyncObj.responseList); // returns empty Array

const sendObject = {};

const postData = async (obj) => {
    const response = await fetch("postUrl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });
};

postData(sendObject);

const fetchWithParams = async (param1, param2) => {
    const response = await fetch(
        `http://something.com/api/random?param1=${param1}&param2=${param2}`
    );
};

const paramsObj = {
    param1: "param1",
    param2: "param2",
};

const fetchWithObj = async (paramsObj) => {
    const response = await fetch(
        `http://something.com/api/random?param1=${paramsObj.param1}&param2=${paramsObj.param2}`
    );
};

// closure
/**
 * a closure is a function having access to parent scope, even after the parent function has closed
 * created during definition not execution
 */
let globalScopeVariable = 5;

const parentFunction = () => {
    let localScopeVariable = 100;
    console.log(`initial globalScopeVariable is ${globalScopeVariable}`);
    console.log(`initial localScopeVariable is ${localScopeVariable}`);

    const childFunction = () => {
        globalScopeVariable++;
        localScopeVariable += 100;
        console.log("globalScopeVariable", globalScopeVariable);
        console.log("localScopeVariable", localScopeVariable);
    };

    return childFunction;
};

const instance = parentFunction();

console.log("instance", instance);
instance();
instance();
instance();

// IIFE + closure
const points = ((initialValue) => {
    let remainingPoints = initialValue;
    console.log(`You have a total of ${remainingPoints} points`);
    return () => {
        remainingPoints--;
        if (remainingPoints > 0) {
            console.log(`You have ${remainingPoints} points remaining`);
        } else {
            console.log(`You have exhausted your points`);
        }
    };
})(2);

points();
points();

// __proto__
/**
 * extending the prototype chain
 * no circular references are allowed for __proto__
 * valueOf()
 * prototype
 * object constructors
 * class constructors
 */
const grandParentObject = {
    isGrandParentAlive: true,
};

const parentObject = {
    isParentAlive: true,
};

const childObject = {
    isChildAlive: true,
};

// childObject is a prototype of parentObject

childObject.__proto__ = parentObject; // old or legacy
console.log("parentObject", parentObject);
console.log("childObject", childObject);

Object.setPrototypeOf(childObject, parentObject);
console.log("childObject", Object.getPrototypeOf(childObject));
console.log(childObject.isParentAlive); // true
console.log(parentObject.isChildAlive); // undefined

const childChildObject = {
    isChildChildAlive: true,
    __proto__: childObject,
};

console.log("childChildObject", childChildObject);
console.log(childChildObject.isParentAlive); // true
Object.setPrototypeOf(parentObject, childChildObject); // Uncaught TypeError: Cyclic __proto__ value

const applicant = {
    platform: "leetcode",

    get codingPlatform() {
        return this.profile;
    },

    set codingPlatform(platform) {
        this.platform = platform;
    },
};

const sampleApplicant = {};
Object.setPrototypeOf(sampleApplicant, applicant);
sampleApplicant.codingPlatform = "codechef";
console.log("sampleApplicant", sampleApplicant);
console.log("applicant.valueOf()", applicant.valueOf());

// key extraction
console.log("keys", Object.keys(applicant));
console.log("using Object.keys");
Object.keys(applicant).forEach((key) => {
    console.log(key);
});
console.log("using for..in loop");
for (const key in applicant) {
    console.log(key);
}

// object constructors = constructor functions
// 1. function constructors (old-school, before ES6, use .prototype explicity)
function User(username, password) {
    this.username = username;
    this.password = password;
    // inefficient, as separate reference is created for every object
    // this.isPasswordCorrect = (incomingPassword) => {
    //     console.log("inefficient");
    //     return incomingPassword == this.password;
    // };
}

// efficient, as a sigle reference is shared among all objects
User.prototype.isPasswordCorrect = (incomingPassword) => {
    console.log("efficient");
    return incomingPassword == this.password;
};

const loki = new User("loki777", "godofmischief");
const thor = new User("thor777", "godofthunder");
console.log(loki.isPasswordCorrect === thor.isPasswordCorrect); // true if method is defined using prototype(single ref), if not false (separate ref)

// 2. class constructors (modern JS, ES6, use .prototype under the hood)
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    // this is stored in User.prototype
    isPasswordCorrect(incomingPassword) {
        console.log("inefficient");
        return incomingPassword == this.password;
    }
}

const loki = new User("loki777", "godofmischief");
const thor = new User("thor777", "godofthunder");
console.log(loki.isPasswordCorrect === thor.isPasswordCorrect); // true
console.log(loki.isPasswordCorrect === User.prototype.isPasswordCorrect); // true

// Recusion
/**
 * Continuation token from an API
 * parser or directory or export
 */

/*
// currying
/**
 * making nested functions more readable
 * function composition
 * bind + fixed params function
 */
// const greet = (firstName) => {
//     return (lastName) => {
//         return (rollNo) => {
//             return `Hello ${firstName} ${lastName}, your roll number is ${rollNo}.`;
//         };
//     };
// };

const greet = (firstName) => (lastName) => (rollNo) =>
    `Hello ${firstName} ${lastName}, your roll number is ${rollNo}.`;

console.log(greet("loki")("reddy")("777"));

const curriedPower = (x) => (y) => Math.pow(x, y);
const TwoPowerOf = curriedPower(2);
console.log(TwoPowerOf(10));

const addCustomer =
    (fn) =>
    (...args) => {
        console.log("save customer info");
        return fn(...args);
    };

// primitives are immutable
// reassignment is not same as mutable
// structures contain mutable data
// pure functions - avoid mutating the data
// impure functions - mutates the data
// const does not make array immutable
// shallow copy - nested structural datatypes still share the same reference
// deep copy - (loadash, ramda - builtin) - share no references
// primitives - values,     immutable,
// structural - references, mutable,

// shallow copy
const arr = [1, 2, 3];
const arr1 = [...arr, 4];
console.log([...arr] === arr); // This condition will always return 'false' since JavaScript compares objects by reference, not value.
console.log(arr1 === arr); // false

const arr2 = Object.assign([], arr);
console.log(arr2 === arr); // false
arr2.push([7, 8, 9]);
const arr3 = [...arr2];
console.log("arr3", arr3);
arr3[3].push(10);
console.log("arr2", arr2);

const lokiObj = {
    name: "loki",
    age: 777,
    address: {
        planet: "asgard",
        alias: "godofmischief",
    },
};

Object.freeze(lokiObj); // creates a shallow freeze
lokiObj.age = 7; // remains unchanged
lokiObj.address.planet = "random"; // change applied
console.log(lokiObj);

// deep copy
const newlokiObj = JSON.parse(JSON.stringify(lokiObj));
console.log(lokiObj === newlokiObj); // false

// vanilla JS
const deepClone = (obj) => {
    if (typeof obj !== "object" || obj === null) return obj;

    const newObject = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        const value = obj[key];
        newObject[key] = deepClone(value);
    }

    return newObject;
};

// pure function
/**
 * why? - clean code, easy to test, debug, decoupled and independent,
 * referential transparency
 * cannot - access DB,API,file system
 * not return - not pure
 * pure HOFs - map,reduce,filter
 * Rules
 * 1. same INPUT always gives same OUTPUT
 * 2. no side-effects (no mutations)
 */

// impure function
// refactor impure to pure - do not mutate input data

// IIFE - variations
/**
 * Reasons
 * 1. does not pollute the global object namespace
 * 2. private variables and methods from closure
 * 3. module pattern - revealing pattern
 */

// with anonymous arrow func
(() => {
    // do stuff
})();

// with function keyword
(function () {
    // do stuff
})();

// with function name (allows recursion)
(function namedIIFE(num) {
    // do stuff
    if (num <= 0) return;
    console.log("positive", num);
    return namedIIFE(num - 1);
})((num = 2));

// Revealing pattern
const Game = (() => {
    let score = 0;
    const current = () => `The score is ${score}`;
    const increment = () => score++;
    const decrement = () => score--;
    return { current, increment, decrement };
})();

console.log(Game.current());
Game.increment();
console.log(Game.current());
Game.decrement();
console.log(Game.current());

// injecting a namespace
((namespace) => {
    namespace.score = 0;
    namespace.current = function () {
        return `The score is ${this.score}`;
    };
    namespace.increment = function () {
        this.score++;
    };
    namespace.decrement = function () {
        this.score--;
    };
})((window.App = window.App || {}));

console.log(App.current());
App.increment();
console.log(App.current());
App.decrement();
console.log(App.current());

// functional programming - pipe and compose
// lodash and ramda has inbuilt functions

const pipe =
    (...fns) =>
    (val) =>
        fns.reduce((prev, fn) => fn(prev), val);

const splitOnSpaces = (string) => string.split(" ");
const count = (array) => array.length;

const wordCount = pipe(splitOnSpaces, count);
console.log(
    wordCount(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo asperiores, consequatur rem temporibus, facilis ducimus illum ipsum dolores obcaecati neque sint ad voluptates molestiae alias, modi repudiandae iure quaerat."
    )
);

// Clone / copy func within a pipe or compose functions

// 1. clone the object before an impure function mutates it
const someFunction = (obj) => {
    obj.god = "thor";
    return obj;
};
const shallowClone = (obj) => (Array.isArray(obj) ? [...obj] : { ...obj });
const addProp1 = pipe(shallowClone, someFunction);
const myObj = { god: "loki" };
const updatedObj1 = addProp1(myObj);
console.log("1:", myObj, updatedObj1);

// 2. curry the function to create a partial that is unary - pros & cons...

// WRONG !!!!!
// const cloneAndUpdateObj = (cloneFn) => (obj) => {
//     const clonedObj = cloneFn(obj);
//     clonedObj.god = "thor";
//     return clonedObj;
// };
// // const updatedObj2 = cloneAndUpdateObj(shallowClone)(myObj); // or
// const clonedObj = cloneAndUpdateObj(shallowClone);
// const updatedObj2 = clonedObj(myObj);
// console.log("2:", myObj, updatedObj2);

// 3. insert clone function as a dependency - pros & cons...

// debounce - limits frequent calls by delaying executing until inactivity

let counter = 0;
const handleClick = (e) => {
    console.log(e, `clicked ${++counter} times`);
};

// without debounce

const attachEventListeners = () => {
    const checkoutButton = document.getElementById("checkout");
    checkoutButton.addEventListener("click", (e) => {
        checkoutButton.disabled = true;
        setTimeout(() => {
            checkoutButton.disabled = false;
        }, 5000);
        handleClick(e);
    });
};

/*

// version 0.1 (X - timer is global, e is undefined, FIX - return fn from debounce with e as argument)

let timer;
const debounce = (fn, delay) => {
    // console.log(`debounce called with timer : ${timer}, fn : ${fn}`);
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
        fn();
    }, delay);
};

const attachEventListeners = () => {
    document
        .getElementById("checkout")
        ?.addEventListener("click", (e) => debounce(handleClick, 1000));
};

// version 0.2 (X - multiple arguments, FIX - use ...args)

const debounce = (fn, delay) => {
    let timer;
    return (e) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(e);
        }, delay);
    };
};

const attachEventListeners = () => {
    document
        .getElementById("checkout")
        ?.addEventListener("click", debounce(handleClick, 1000));
};

// version 1.0

const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

const debouncedHandleClick = debounce(handleClick, 1000);

const attachEventListeners = () => {
    document
        .getElementById("checkout")
        ?.addEventListener("click", debouncedHandleClick);
};
*/

const initApp = () => {
    attachEventListeners();
};

document.addEventListener("DOMContentLoaded", initApp);
