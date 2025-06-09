# TypeScript Notes (only Theory)

1. Intro, Setup and config
   - superset of JS
   - valid js is valid ts
   - browser doesn't understand TS,
   - Anders Hejlsbery created C# and TS (Microsoft)
   - ts - strongly+statically typed language (complie time type checking)
   - js - loosely+dynamically typed language (runtime type checking)
   - type safety vs type checking, dev tool
   - caching errors during development
   - uses var for extended compatibility
   - `"use strict"` - auto added in JS file to enable type checking
   - ?global(`-g`) installation
   - files - `.ts` & `.d.ts`

2. Data Types
   - static, dynamic
   - `number`, `boolean`, `string`, RegExp, `bigint`
   - `unknown` - can be used as `Promise<unknown>`
   - `void` - functions which return nothing
   - `any` - max avoid
   - `never` - execption/termination
   - `|` - union, allow multiple types
   - `!` - guarantee/assure, DB, DOM elements
   - `?` - optional
   - `&` - combination
   - `readonly` - private/internal
   - literal types
   - `Function`, `null`, `undefined`
   - inference (figuring out, implicit) & annotations
   - DOM element types
   - `keyOf`

3. Usage
   - type Aliases - `type`, complex types
   - Enums - `enum`, not top level addition, but added to language and runtime
   - Objects, functions (signatures and params, fat arrow funcs)
   - `Array<Type>` or `Type[]` - homogeneous
   - Tuple - only in TS not in JS, strict order, [article](https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array)
   - interface - `interface`, abstraction, reopening, `extends`
   - type (aliases, union, intersection) vs interface (classes,extendable) - [article](https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript)

4. Classes
   - type/visibililty/access modifiers
     - `public`
     - `private` (only for TS as `#` in JS, getter & setters)
     - `protected` (inherited class)
   - `abstract` `class` - blueprint

5. Generics
   - `<Type>` or `<T>` - similar to CP templates in C++
   - [docs](https://www.typescriptlang.org/docs/handbook/2/generics.html)
   - classes
   - multiple generic types
   - generic + non-e

6. Narrowing
   - `typeof` (typeguard)
   - `instanceof`
   - `as` - predicates/assertions (or Casting)
   - discriminated union - similar to `ACTION_TYPE` in redux
   - exhaustiveness - default case with `never`
   - [docs](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

7. tsc (TS Compiler) Options ([tsconfig](https://www.typescriptlang.org/tsconfig/))
   - `tsc --init` - create `tsconfig.json`
   - `tsc -w` or `tsc -watch` - watch mode
   - `"rootDir"` -
   - `"outDir"` -
   - `"target"` - ES version
   - `"include"` -
   - `"exclude"` -

8. Utility Types
   - built-in types  
   1. partial - `Partial<TypeName>`
   2. required - `Required<TypeName>`
   3. readonly - `Readonly<TypeName>`
   4. pick - `Pick<TypeName, 'pickprop1' | 'pickprop2'>`>
   5. omit - `Omit<TypeName, 'notpickprop1' | 'notpickprop2'>`>
   6. exclude - `Exclude<TypeName, 'excludeprop1' | 'excludeprop2'>`>
   7. extract - `Extract<TypeName, 'extractprop1' | 'extractprop2'>`>
   8. nonnullable - `NonNullable<TypeName>`
   9. record - `Record<TypeName, type1>`, converts types to object

9. Decorators
    - `@decoratorName` - same as in Python but structured/static not dynamic
    - a function that wraps/modifies another class, method, property, or parameter (GPT)
    - class & function decorators
    - `"experimentalDecorators" : true`
    - used in Nest.js, Angular, ORMs

10. declaration files (`types.d.ts`)
    - `declare` stuff
    - global augmentation/scope
    - DTS/types file

11. Miscellaneous/Extras
    - index signature & flexible object shapes
    - promise - `Promise<resultTypeOrInterface>`  
    - namespace - `export` inside a `namespace`
    - API call

- Exploration
  - [TS docs](https://www.typescriptlang.org/docs/)

## Reference Links

- [procademy](https://github.com/manojjha86/typescript-complete-course/blob/main/01-typescript-basics-data-types/final/app.ts)
