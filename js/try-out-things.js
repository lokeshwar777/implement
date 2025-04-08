/*
// closure
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
*/

/*****************************************************************************/

/*
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
*/

/*****************************************************************************/

/*
// __proto__
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
*/

/*****************************************************************************/

/*
// currying - making nested functions more readable
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
*/

/*****************************************************************************/

/*
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
*/

/*****************************************************************************/

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

/*****************************************************************************/

// IIFE - variations
/**
 * Reasons
 * 1. does not pollute the global object namespace
 * 2. private variables and methods from closure
 * 3. module pattern - revealing pattern
 */
/*
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
*/

/*****************************************************************************/

/*
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
*/

/*****************************************************************************/
