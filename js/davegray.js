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
import func1 from "path";

export function func2() {}
export const func3 = () => {};
import { func2 as someName, func3 } from "path";

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
