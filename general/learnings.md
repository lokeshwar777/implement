# Learnings

## HTML

- [x] what & structure of a website (skeleton)
- [x] emmet snippets/abbreviation
- [x] SEO (tags, elements & metadata)
- [ ] global attributes (`id`, `class`, `lang`, `data-*`, etc.)
- [x] semantics, structure & formatting
- [ ] doctypes & HTML versions
- [ ] tables (structure, accessibility, styling)
- [x] forms (input types, attributes, validation, screen readers)
- [ ] accessibility (roles, aria-\*, alt text, tab order)
- [x] media, links & embeddings (images, audio, videos, iframe)
- [x] HTML entities (`&nbsp;`, `&lt;`, etc.)
- [ ] custom data attributes (`data-*`)
- [ ] web components basics (`<template>`, `<slot>`)
- [ ] deprecated & obsolete elements
- [x] Best Practices, & Resources ([MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML) (Detailed), [W3Schools](https://www.w3schools.com/html/) (Quick), [W3Validator](https://validator.w3.org/#validate_by_input+with_options))

## CSS

- [x] what & role of CSS (style layer, separation of concerns)
- [x] linking (inline, internal & external)
- [x] syntax & selectors (type, universal, element, group, class, id, attribute, pseudo-classes/elements, specificity & caveats)
- [x] colors, units & values (hex, rgb, hsl, rem, em, vh, vw)
- [x] typography (fonts, units & colors, line-height, text-align, letter-spacing)
- [x] box (content, padding, border, margin, TRBL)
- [x] display types (`block`, `inline`, `inline-block`, `none`)
- [x] positioning (`static`, `relative`, `absolute`, `fixed`, `sticky`)
- [ ] float, clear & overflow
- [x] flexbox (main axis, cross axis, alignment, wrapping)
- [x] media queries (responsive design breakpoints)
- [ ] backgrounds & borders (shorthand, gradients, border-radius)
- [x] transitions & animations (`transition`, `@keyframes`, `animation`)
- [x] grid layout (tracks, cells, auto-placement, areas)
- [ ] pseudo-classes & pseudo-elements (`:hover`, `:nth-child()`, `::before`)
- [ ] specificity, inheritance & cascade
- [ ] custom properties (CSS variables)
- [ ] z-index & stacking context
- [ ] vendor prefixes & compatibility
- [x] Best Practices, Resources (([Google Fonts](https://fonts.google.com/)), ([MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS) (Detailed), [CSS Tricks](https://css-tricks.com/) (Practical), [Can I use](https://caniuse.com/) (Browser support))

## JS

- [x] what & role of JavaScript (behavior layer, interaction)
- [x] syntax, variables & data types (primitives & reference types)
- [x] operators (comparison, ternary)
- [x] conditionals & loops (`for-of`, `for-in`, ...)
- [ ] functions (declaration, expression, arrow functions, IIFE, higher-order functions)
- [x] scope & closures (function, block & lexical scope)
- [ ] OOP in JS (constructors, prototypes, classes, `this`, `bind`, `call`, `apply`)
- [x] error handling (`try/catch`, `finally`, `throw`, compile & runtime)
- [x] DOM manipulation (nodes, attributes, types, selectors)
- [x] events & listeners (`addEventListener`, event object, bubbling, delegation)
- [x] working (call stack, webAPI, event loop, callback queue)
- [x] Execution internals (v8 engine, execution context)
- [ ] ES6+ features (modules vs commonjs)
- [x] callbacks, promises & async/await (microtasks vs macrotasks)
- [ ] JSON & APIs (parsing, `fetch`, async data handling, AJAX)
- [ ] localStorage, sessionStorage & cookies
- [x] arrays & objects (`map`, `filter`, `reduce`, destructuring)
- [x] intermediate concepts (performance, memo, garbage collection, hoisting, TDZ, closure, currying, generators, IIFE)
- [ ] advanced concepts (fn programming,  pure/impure fns, cloning, debounce, throttle, composition, shadowing, promisifying)
- [ ] testing (unit, integration , E2E)
- [x] method exploration (Strings, Arrays, Objects, Math, Date)
- [ ] Dev Tools
- [x] Best Practices & Resources ([MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [JavaScript.info](https://javascript.info/))

## UI Exploration

- [ ] Tailwind CSS
- [ ] Bootstrap
- [ ] MUI (Material UI)
- [ ] Daisy UI
- [ ] ScadCN
- [ ] ChakraUI
- [ ] RadixUI

## UX Exploration

- [ ] React
- [ ] Angular
- [ ] Vue
- [ ] Svelte

## React

- [ ] what & why of React (component-based UI, virtual DOM, declarative code)
- [ ] setting up a React app (manual setup, Create React App, Vite)
- [ ] core concepts (react element, reconciliation, virtual DOM, diffing algo)
- [x] JSX syntax & expressions
- [ ] components (function vs class, props, default props)
- [x] conditional rendering (`if`, ternary, `&&`)
- [x] list rendering with `map()` & keys
- [x] state management with `useState` (primitives, objects, arrays)
- [x] lifting state up & prop drilling
- [x] event handling (synthetic events, inline & handler functions)
- [x] forms & controlled components (`value`, `onChange`, form submit)
- [x] `useEffect` (dependencies, cleanup, common patterns)
- [x] routing (react router, dynamic routes, nested routes)
- [ ] component lifecycle (class vs functional comparison)
- [x] custom hooks (creating reusable logic)
- [x] context API (`createContext`, `useContext`)
- [x] complex state management (RTK / Zustand / React Query)
- [x] Build Tools & Debugging (Vite/Parcel, Dev Tools, Source Maps)
- [ ] refs & DOM access (`useRef`, forwarding refs)
- [ ] portals, fragments & error boundaries
- [x] performance optimization (`React.memo`, `useMemo`, `useCallback`)
- [ ] code splitting & lazy loading (`React.lazy`, `Suspense`)
- [ ] testing basics (`Jest`, `React Testing Library`)
- [ ] Best Practices & Resources ([React Docs](https://react.dev/), [React Patterns](https://reactpatterns.com/))

## TypeScript

- [x] what & why of TypeScript (superset of JS, static typing, tooling benefits)
- [x] setting up a TypeScript project (tsconfig.json, compiler, VSCode integration)
- [x] basic types (`string`, `number`, `boolean`, `any`, `unknown`, `void`, `null`, `undefined`)
- [x] type inference & annotations
- [x] union & intersection types
- [x] literal types & type aliases
- [x] enums (numeric & string enums)
- [x] functions (type annotations, return types, optional/default/rest parameters)
- [x] interfaces vs type aliases
- [x] classes (access modifiers, constructors, inheritance, `readonly`)
- [x] generics (functions, interfaces, classes)
- [x] advanced types (`Partial`, `Pick`, `Record`, `Omit`, etc.)
- [x] utility types (built-in types from TypeScript)
- [x] narrowing & type guards (`typeof`, `in`, `instanceof`, custom type guards)
- [ ] declaration merging & module augmentation
- [ ] working with modules (ES modules, CommonJS, `import`/`export`)
- [ ] working with third-party types (`@types`, DefinitelyTyped, `tsconfig.json` paths)
- [x] type assertions & non-null assertion (`as`, `!`)
- [ ] structural typing & duck typing
- [x] working with DOM in TypeScript
- [ ] Best Practices & Resources ([TypeScript Handbook](https://www.typescriptlang.org/docs/), [TS Deep Dive](https://basarat.gitbook.io/typescript/), [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped))

## Linux

## Node.js

- [x] what & why of Node.js (JavaScript runtime, event-driven, non-blocking I/O)
- [x] setting up a Node.js project (`npm init`, folder structure)
- [x] working with the REPL & core modules (`fs`, `path`, `http`, `os`, `crypto`)
- [x] CommonJS (`require`, `module.exports`) vs ES Modules (`import`, `export`)
- [x] asynchronous programming (callbacks, promises, async/await)
- [x] event loop, call stack, event queue, and concurrency
- [x] working with the file system (`fs.readFile`, `fs.writeFile`, streams)
- [ ] creating a basic HTTP server (`http.createServer`)
- [ ] Express.js basics (routing, middleware, request/response lifecycle)
- [ ] handling data (`req.body`, `req.params`, `req.query`)
- [ ] serving static files with Express
- [x] REST APIs (CRUD operations, RESTful routes)
- [x] middleware (`express.json()`, custom middleware, `next()`)
- [x] error handling (try/catch, error middleware)
- [x] environment variables (`dotenv`, `.env` files)
- [ ] working with databases (MongoDB, PostgreSQL, MySQL integration)
- [ ] authentication & authorization (JWT, sessions, cookies)
- [ ] input validation & sanitization (`joi`, `express-validator`)
- [ ] logging & debugging (`morgan`, `winston`, `debug`)
- [ ] testing (`jest`, `supertest`, `mocha`)
- [ ] nodemon, production readiness (`pm2`, `helmet`, rate limiting)
- [ ] Best Practices & Resources ([Node.js Docs](https://nodejs.org/en/docs), [Node Best Practices](https://github.com/goldbergyoni/nodebestpractices), [Express Docs](https://expressjs.com/))

## Next.js

- [x] what & why of Next.js (React framework, SSR, SSG, SEO-friendly)
- [x] project setup (manual, `create-next-app`, folder structure)
- [x] pages & routing (file-based routing, dynamic routes, catch-all routes)
- [x] linking pages (`next/link`, shallow routing)
- [x] assets & static files (`public` folder, `next/image`)
- [ ] metadata & SEO (`<Head>`, `app/head.tsx`, `next-seo`)
- [x] layouts (shared UI, nested layouts, `layout.tsx` in App Router)
- [ ] data fetching strategies:
  - [ ] `getStaticProps` (SSG)
  - [ ] `getServerSideProps` (SSR)
  - [ ] `getStaticPaths` (dynamic SSG)
  - [ ] `fetch` in Server Components (App Router)
- [x] API routes (`/pages/api`, request handlers)
- [ ] middleware (request interception, auth, redirects)
- [x] environment variables (`.env.local`, process.env)
- [x] file-based dynamic metadata (App Router)
- [ ] built-in CSS & Sass support
- [ ] module CSS, Tailwind CSS integration
- [ ] image optimization (`next/image`, automatic resizing, lazy loading)
- [ ] font optimization (`next/font`, Google Fonts integration)
- [ ] deployment (Vercel, custom servers, other platforms)
- [ ] internationalization (i18n routing & configuration)
- [ ] Best Practices & Resources ([Next.js Docs](https://nextjs.org/docs), [Next.js Learn](https://nextjs.org/learn), [Vercel Examples](https://vercel.com/templates/next.js))
