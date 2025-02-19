/** Completed
 * 1 - Get Started
 * 2 - Linking js file
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
