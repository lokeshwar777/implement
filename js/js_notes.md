# JS notes (only theory)

1. Basic
   - scripting language to run on a browser/client
   - synchronous blocking single threaded language
   - lightweight, behaviour
   - ECMA - standardisation
   - node = JS + C++
   - script (internal, external(defer, better after body), inline)
   - variables - named memory location (for access)
   - var, let, const
   - truthy, falsy, == vs === vs !== vs !===
   - undefined vs null vs not defined
   - scope - global, function, block
   - reserved keywords
   - looping - of, in, some,
   - dialog box - alert, prompt, confirm
   - dev tools - memory location
   - imperative
  
2. Functions
   - plain, arrow(() => {})
   - unreachable statements
   - IIFE
   - higerOrderFunction(callback) { callback() }
   - callback = reference to a function, passed for later execution
   - error first callback pattern
  
3. Reference types
   - non-primitives - arrays (nD), objects (Prototypes) & functions
   - stack & heap memory
   - shallow & deep copy
   - map, reduce, filter

4. Class
   - this, bind, factory functions, static, super, extends, instanceof
   - prototypal inheritance
   - see OOP_notes.md

5. Garbage collection
   - memory management tool used prevent memory leaks

6. Error Handling
   - error (event which disrupts normal flow of execution)
   - compile (while parsing of code) & runtime errors
   - try-catch, finally, throw (custom error handling)

7. DOM manipulation
   - Document Object Model
   - window object (global)
   - BOM (Browser Object Model)
   - parent, child, sibling
   - getElement...(), querySelector(), $0, getAttribute(), setAttribute()
   - innerHTML, outerHTML, textContent (same as code written), innerText (same as UI), style.cssText
   - createElement(), appendChild(), insertAdjacentElement(), removeChild()
   - className, classList (add, remove, toggle, contains)
   - NodeList, HTMLCollection

8. Performance
    - timestamp - performance.now()
    - reflow - process of calculating position/dimension
    - repaint - process of displaying pixel by pixel
    - documentFragment - lightweight document object, no reflow, no repaint

9. Browser Events
    - event (announcements done by browser)
    - unmonitorEvents()
    - target, listener, action
    - phases or lifecycle of event
      1. capture
      2. at-target
      3. bubbling
    - addEventlistener (default-bubbling, usecapture=true for custom), remove
    - event object (e) => {}, default action - preventDefault(), stopPropogation()
    - avoiding too many listeners
      1. passing single instance
      2. leverage bubbling (Event Delegation)
    - DOMContentLoaded
    - clearTimeout(), clearInterval(), clearImmediate()

10. Working of Chrome Browser v8 Engine JS Runtime
    - sync code, async code, blocking
    - concurrency in a single thread
    - call stack/ JS engine
    - browser/WebAPIs (DOM, storage, timers)
    - event loop - checks for isEmpty(callStack) and pops from queues
    - callback/task/macrotask queue - general async code (timeout, interval)
    - microtask queue - urgent async code (promises)
    - call stack > microtask queue > macrotask queue
    - [visualise](http://latentflip.com/loupe)
    - Netscape, ECMA, GC triggers, spidermonkey, JSCore, Chakra, JIT compilation

11. Execution internals (GPT)
    - memory allocation
    - function invocation
    - global execution context creation (separate for each function)
      - memory (variable env, stores complete code for func else undefined)
      - code (thread of execution)
    - call stack & aliases
    - lexical env & env records
    - memory model

12. ES6+ features
    - () => {} & default params
    - Arguments keyword → array
    - Default params not available before es6
    - optional chaining `?.`
    - spread operator & rest parameters (`...`)
    - template literals
    - destructuring
    - import/export
    - ES6 modules vs CommonJS

13. Promise
    - pending, fulfilled, rejected
    - then(), catch(), finally(), all()
    - callback hell

14. Async/await
    - when you want to execute async code synchronously
    - used for efficiently handling promises
    - async func always returns a promise

15. Fetch API
    - [resource](https://jsonplaceholder.typicode.com/)  
    - do not foget `await response.json()`

16. Storage
    - local & session storage, cookies  

17. Hoisting
    - function & variable
    - declaration shift on top of current scope (not value)
    - not for functional expression
    - 2 ways - var keyword & func declaration
    - doesn't apply for classes
    - call stack
    - let & const can hoist but value can't be accessed because of TDZ

18. Temporal Dead Zone (TDZ)
    - from the start of the block until code execution reaches the place where the variable is declared and initialized
    - let & const create TDZ

19. Closure
    - function binding with lexical scope (required data)

20. Currying
    - Making nested functions more readable: `() => () => {}`  
    - Helps create configurable and reusable functions

21. Composition

22. Shadowing

23. Generators

24. Promisifying

25. AJAX

26. Copies / Clones  (GPT)
    - Shallow vs Deep  
    - Primitives (copied by value) vs Structural types (copied by reference)  
    - Mutable vs Immutable  
    - Vanilla JS (`Object.assign`, spread) vs Library (Lodash's `cloneDeep`)
    - Object cloning (spread, assign, iteration)

27. Pure vs Impure Functions  (GPT)
    - Pure: No side effects, same output for same input  
    - Impure: Causes side effects or depends on external state  
    - Referencial transparency

28. IIFE (Immediately Invoked Function Expression)  (GPT)
    - "Iffy" functions to execute immediately  
    - Used for private scope  
    - Variations: Unary `+function(){}()`, `!function(){}()`  
    - Revealing Module Pattern  
    - Namespace injection to avoid global pollution

29. Functional Programming  (GPT)
    - `pipe()`, `compose()` to chain functions  
    - Pros: Predictability, testability  
    - Cons: Verbosity, performance (sometimes)

30. Debounce  
    - Limits frequent function calls by delaying execution until inactivity

31. Throttle  
    - Limits frequent function calls by ensuring execution at fixed intervals

32. Memoisation  
    - Caching results using closures  
    - Used to optimize expensive function calls

33. Advanced async (GPT)
    - race condition
    - Abort Controller

34. Security aspects (GPT)
    - (XSS) Cross-Site Scripting
    - (CSRF) Cross-Site Request Forgery
    - (CSP) Content Security Policy

35. Tooling (GPT)
    - Babel, Webpack, ESLint
    - sourcemaps (debugging) & performance profiling

36. Testing
    - Verifying code correctness  
    - Types: Unit, Integration, E2E  
    - Frameworks: Jest, Mocha, Jasmine

37. Regex

38. Exploration
    - Strings methods
    - Arrays methods
    - Objects methods
    - Math methods
    - Date methods
    - window methods
    - history methods
    - event types (mouse, keyboard, clipboard)
