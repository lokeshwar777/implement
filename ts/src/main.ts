// Resource : "Dave Gray"

/**
 * 1. Setup and config
 * 2. Data Types
 * 3. Array, Tuple, Objects, Types, Interfaces
 * 4. Type Aliases, literal types, functions and params
 * 5. Type Assertions (or Casting), DOM
 * 6. Classes and Interfaces,visibililty modifiers
 */

/**
 * Anders Hejlsbery created C# and TS (Microsoft)
 * superset of JS
 * 'tsc -w' for watch flag
 * valid js is valid ts
 * ts - strongly+statically typed language
 * js - loosely+dynamically typed language
 * caching errors during development
 * types - number, boolean, string, RegExp, BigInt, any, Enums, void, never, unknown - ? (optional)
 * Type(aliases) vs Interface (classes,extendable)
 * Enums - not top level addition, but added to language and runtime
 */

let user = "loki";
// console.log(user);

let a: number = 12;
// let b: string = "6";
let b: number = 6; // static types
let c = "2"; // dynamic types
// c = 777;

// console.log(a / b);
// console.log(b * c); // set { noEmitOnError : false } and uncomment this

const sum = (a: number, b: string) => {
    return a + b;
};

let userId: string | number; // union types

let re: RegExp = /\w+/g;

// Array
let rollNos: string[] = [];
rollNos.push("21211A05E9");

// Tuple
let myTuple: [string, number, boolean] = ["Loki", 7, false];
myTuple[1] = 777; // any other index is not allowed

// Objects
let myObj: object = {};
myObj = [];
myObj = rollNos; // still object
myObj = myTuple; // still object
myObj = {}; // still object
// console.log(typeof myObj);

type StudentData = {
    firstName: string;
    lastName?: string;
    favs: (string | number)[];
    adult: boolean;
};

const myData: StudentData = {
    firstName: "loki",
    // lastName: "reddy", // optional
    favs: [777, "coding", "CP"],
    adult: true,
};

// console.log(typeof myData); // object

myData.firstName = "thor"; // not allowed
// myData.lastName = false; // not allowed

const getStudentData = (student: StudentData) => {
    // return `Hello ${student.lastName?.toLocaleUpperCase() || "Mr. X"}`;

    if (student.lastName) {
        return `Hello ${student.lastName.toLocaleUpperCase()}`;
    }
    return `Hello Mr.X`;
};

// console.log(getStudentData(myData));

enum Grade {
    "E" = 5,
    "D",
    "C",
    "B+",
    "A",
    "A+", // 10
}

/******************************************************************************/

// Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type RollNo = stringOrNumber;

// interface treat them as class or object
// interface RollNo = stringOrNumber; // not allowed

// Literal types
let godName: "Thor" | "Odin" | "Hela" | "Any";

// godName = "loki"; // not allowed

const logMessage = (message: any): void => {
    console.log(message);
};

// logMessage("Sample Message");

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//     (a: number, b: number): number;
// }

let multiply: mathFunction = function (a, b) {
    return a * b;
};

// optional params (required first then optional)
const getSum1 = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};

// default params
const getSum2 = (a: number, b: number, c: number = 777): number => {
    return a + b + c;
};

// rest params
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
};

// never type
const createError = (errorMessage: string): never => {
    throw new Error(errorMessage);
};
const infiniteLoop = () => {
    let i: number = 1;
    while (true) {
        ++i;
        if (i > 100) break; // commenting this line makes return type to never
    }
};

// type guard
const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false;
};

const numberOrString = (val: number | string): string => {
    if (typeof val === "string") return "string";
    // if (typeof val === "number") return "number";
    if (isNumber(val)) return "number"; // type guard
    return createError("This should never happen");
};

// Type Assertions
const addOrConcat = (
    a: number,
    b: number,
    c: "Add" | "Concat"
): number | string => {
    if (c === "Add") {
        return a + b;
    }
    return "" + a + b;
};

const myValue: string = addOrConcat(7, 77, "Concat") as string;

// (we know but TS doesn't) problem : string is returned
const myNumber: number = addOrConcat(7, 77, "Concat") as number;

777 as unknown as string; // special type, double casting, not recommended

// DOM
const image = document.querySelector("img")!;
const myimage = document.getElementById("#img") as HTMLImageElement;
const nextimage = <HTMLImageElement>document.getElementById("#img"); // not allowed in react , JSX

// image.src;
// myimage.src;

/******************************************************************************/

class User {
    firstName: string;
    country!: string;

    constructor(
        firstName: string,
        public lastName: string,
        public readonly username: string,
        private age: number,
        protected password: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.age = age;
        this.password = password;
    }

    public getAge() {
        return `Age is ${this.age}`;
    }
}

const loki = new User("loki", "reddy", "loki777", 777, "somepass");

// console.log(loki.firstName); // can modify
// console.log(loki.lastName); // can modify
// console.log(loki.username);
// console.log(loki.getAge());

// visibililty modifiers
/**
 * Cannot assign to 'username' because it is a read-only property
 * Property 'password' is protected and only accessible within class 'User' and its subclasses.
 * Property 'age' is private and only accessible within class 'User'.
 */

class InstaUser extends User {
    constructor(
        public bio: string,
        firstName: string,
        lastName: string,
        username: string,
        age: number,
        password: string
    ) {
        super(firstName, lastName, username, age, password);
        this.bio = bio;
    }

    public getPassword() {
        return `password : ${this.password}`;
    }
}

const Thor = new InstaUser(
    "thorbio",
    "thorfirst",
    "thorlast",
    "thorusername",
    7,
    "thorpass"
);
// console.log(Thor.bio);
// console.log(Thor.firstName);
// console.log(Thor.lastName);
// console.log(Thor.getAge());
// console.log(Thor.getPassword());

interface UserInterface {
    fullName: string;
    username: string;
    userJob(role: string): string;
}

class UserClass implements UserInterface {
    fullName: string;
    username: string;
    constructor(fullName: string, username: string) {
        this.username = username;
        this.fullName = fullName;
    }
    userJob(role: string): string {
        return `The role of ${this.fullName} is role.`;
    }
}

const Hela = new UserClass("Hela", "hela777");
// console.log(Hela.userJob("God Of Death"));

class Student {
    static id: number = 0;

    static getRollNo() {
        return Student.id;
    }

    public rollNo: number;

    constructor(public name: string) {
        this.name = name;
        this.rollNo = ++Student.id;
    }
}

const Aman = new Student("Aman");
// console.log(Aman.rollNo);
const Aryan = new Student("Aryan");
// console.log(Aryan.rollNo);
const ShinChan = new Student("ShinChan");

// console.log(Student.id);

/******************************************************************************/

// getter, setter
class Students {
    private dataState: string[];

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(newVal: string[]) {
        if (
            Array.isArray(newVal) &&
            newVal.every((item) => typeof item === "string")
        ) {
            this.dataState = newVal;
            return;
        } else throw new Error("Required : Array of strings!");
    }
}

const MyStudents = new Students();
// console.log(MyStudents.dataState); // Property 'dataState' is private and only accessible within class 'Students'.
MyStudents.data = ["loki", "thor", "odin"];
// console.log(MyStudents.data);
MyStudents.data = [...MyStudents.data, "hela"];
// console.log(MyStudents.data);
