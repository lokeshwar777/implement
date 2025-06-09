"use strict";
// this is a complete syntax file (not valid code)

// types - number, string, boolean, any, void, never

let variableName: type1 = value;

// good practice
let variableName: type1;
variableName = values;
// or
let variableName = value;

// returnType can also be `void` or `never`
const fatArrowFunc = (param1: type1): returnType => {
    return value;
};

// Array.map()

// functions
function f1(): {} {
    return {};
}
// or
function f1(): { param1: type1; param2: type2 } {
    return { param1: value1, param2, value2 };
}

// function as Type
let functionReferenceVariable = (param:type1) => returnType;

// alias, readonly, optional
type AliasName = {
    readonly _privateOrInternalVariableName: type1; // _ is just a convention
    optionalVariableName?: type2;
};

// combinations or intersections
type T1 = {
    v1: t1;
};
type T2 = {
    v2: t2;
};
type T123 = T1 &
    T2 & {
        v3: t3;
    };

// arrays
const homogeneousArray = type1[] | type2[] | type3[];
// or 
const homogeneousArray = (type1 | type2 | type3)[];
// or 
const homogeneousArray = Array<type1> = []

// enum
enum MyEnum {type1, type2, type3}
let enumVariable: MyEnum;

// typle
const tupleName: [type1, type2, type3];

// interface `;` after each line
interface interfaceName {
    variableName1 : type1;
    functionName1: () => returnType;
    functionName2(param1:type2):returnType;
}

// reopening of an interface
interface interfaceName {
    extraVariable: extratype
}
interface anotherInterface extends interfaceName {
    anotherVariable:anotherType
}

// classes & type modifers
class ClassName {
    protected attributeName:type3;
    constructor(
        public param1: type1, 
        // #param2: type2 // classical JS
        private param2: type2 // no `private` in JS
    ){}

    private privateMethodName() {

    }

    get getterName(): returnType {

    }

    // set setterName():void {} // not allowed
    set setterName(param: any) {

    }
}

// abstract class
abstract class AbstactClassName {
    constructor(
        public param1:type1,
        public param2:type2
    ) {}
    abstract abstractMethodName():void
    // defining this in inherited class is not mandators
    getSomething(): returnType {
        return something
    }
}
class anotherClass extends AbstactClassName {
    constructor(
        public param1:type1,
        public param2:type2,
        public param3:type3,
    ) {
        super(param1, param2)
    }
    abstractMethodName(): returnType {
        return something
    }
}

// generics
function identity<Type>(val: Type): Type {
    return val
}
// or
function identity<T>(val: T): T {
    return val
}
// or 
function thor<loki>(someparam:loki):loki {
    return somelokitypevalue
}

const genericArrowFunction = <T,>(arg: T): T => { return T } 

// multiple & generic + non-generic
const mixedMultipleGeneric = <U, V>(param1: U, param2: V, param3: preDeterminedType) {
    
}

// DOM elements
const loki = document.querySelector('.loki')!;
// or 
const loki = document.querySelector('.loki') as HTMLLokiElement;

// index signature & flexible object shapes
type customComplexType = {
    fixedPropName1: type1,
    fixedPropName2: type2,
    fixedPropName3: type3,
    // [dynamicPropName:string]: dynamicPropType // or
    readonly [dynamicPropName:string]: dynamicPropType
}

let customComplexData : customComplexType = {

}