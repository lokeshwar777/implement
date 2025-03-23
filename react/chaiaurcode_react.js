/**
 * 1. features
 * 2. create project
 * 3. project flow and structure
 * 4. custom react elements
 * 5. hooks
 * 6. virtual DOM, fiber, reconciliation
 * 7. props and tailwind
 */

// Intro
/**
 * React = JS->state + UI->DOM
 * why? -> easy to manage and build complex frontend
 * phantom(ghost) message problem - inconsitency in UI
 * framework vs library
 * react is a library
 * SPA - single page application
 * core - state or UI manipulation, JSX
 * component reusabililty
 * props or properties
 * hooks - change propogation
 * react doesn't has a router
 * no state management so we use redux, redux toolkit, zustand, context API
 * BAAS - firebase,appwrite,supabase
 * no SEO
 * browser rendering of JS issue
 */

// create project
/**
 * react-dom - for web
 * react-native - for mobile
 * npx create-react-app - library // depricated
 * npm vite@latest - framework
 */

// flow and structure
/**
 * <noscript> tag
 * react renders the HTML returned by the App function
 * react scripts
 * you can only return 1 element
 * <></> - react fragment
 * .js vs .jsx
 * capitalise componentName
 * best practice - capitalise component and file name + use jsx
 */

// custom react
/**
 * custom render method
 * bundler parses the JSX and converts it to JS
 * end of the day react is JS
 * React.createElement(key, {props},text)
 * {variable} - JS expression
 * {expression} -> evaluated expression
 * you can get jsx react-runtime
 */

// hooks
/**
 * solves UI updation problem
 * multiple vairable updates
 * convention - [state, setState]
 * let or const [state, setState] = useState(defaultValue) - state propogation
 *
 */

// increment counter
const [counter, setCounter] = useState(0);
counter = counter + 1; // not preferred
setCounter((counter) => counter + 1); // or
setCounter((prevCounter) => prevCounter + 1);

// virtual DOM, fiber, reconciliation
/**
 * virtual DOM - in memory representation of the actual DOM
 * fiber - react's reconcilation algorithm
 * reconciliation - process of updating the virtual DOM
 * diffing algorithm - compares the virtual DOM and actual DOM
 */

// props and tailwind
/**
 * configute vite+tailwind project
 * className, HTMLfor,
 * modularise code based on functionality
 *
 */

// TODO
/**
 * 1. background color changer
 * 2. random password generator
 * 3. currency converter
 */
