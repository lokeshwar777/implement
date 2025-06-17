# React notes (only theory)

1. Core Concepts
   - react element
     - import react using CDN links
     - replace CDN link with `ReactDOM.js` & `React.js`(src code files)
     - react DOM - secret internals
     - `document.createElement()` vs `document.createElement()`
     - `React.createRoot()`
     - `Symbol.for('react.fragment')`
   - virtual DOM - recursive(document.body -> for child in children -> recursive(child))
   - react fibre
   - reconciliation
   - diffing algo

2. Basic & Intro
   - client side library, fast dev, easy & efficient state management
   - a JSX(JavaScriptXML) element can only have 1 parent
   - SPA (Single Page Application)
   - StrictMode (dev) - double renders
   - declarative & functional programming
   - react doesn't show `true`, `false`, `undefined`, `null` so use `String(whatever)`
   - can't see `key` in browser inspect
   - react  - dummy/static server
   - nodejs - intelligent/dynamic server
   - browser doesn't understand node modules
   - react - declarative, component based architecture, single page applications
   - vanilla js - imperative, tell to manually DOM update,
   - [React Dev Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

3. Functional Components (`(props) => JSX`)
   - functional - stateless, no `this`, solution without state
   - reactComponent = a react element having type as Function
   - `<></>` or `<Fragment></Fragment>` (type is `symbol`)
   - component rules - `CapitalizedName`, Read-only props, use key in lists, pure function, modular & composable, SRP, hooks at top only
   - lifecycle methods
     - mounting, updating, unmounting, error handling
   - styling omponents
     - css modules
     - inline styles
     - Tailwind
     - Sass
     - `styled-components` - library
   - event handling - passing as a prop

4. Class (based) Components (legacy)
    - `extends Component` + `render() { return JSX}`
    - state (private data), lifecycle hooks, stateful, feature rich, complex UI logic

5. Props
   - short for properties
   - one object passed to the component(function)
   - default
   - destrucutring `{children}`, `props.children`
   - derived state & state lifting (sync using parent)
   - prop drilling
   - children
     - a special prop
     - `props.children` = whatever is inside `<Component> ... </Component>`
     - `<Component propName={...} />` - `props.propName` - specific data
     - `<Component>...</Component>` - `props.children` - JSX content

6. State
   - data that determines UI
   - nostate/stateless variables - manual re-rendering using `React.render()` to see the changes
     - state variables - auto re-render changes
     - hook - function + addtional
   - state vs props
     - props - if parent decides value
     - props can also be state (in parent)
     - modifying props in children or props should be immutable - bad practice
     - re-render happens if props change or state changes

7. Rendering
   - Conditional - `&&`, `loading ? <Spinner /> : <Data />`, `!!val`, `if-else`, `if (!data) return null;`, short-circuit eval `val || <Fallback />`, `null`/`undefined`, IIFE
   - test re-renders - `math.random()`
   - lists - `map()`,`forEach()`, `key`
   - infinite rendering (anti - pattern)
     - (`fetch()` + `setData()`) outside `useEffect()`
   - lazy loading & code splitting
     - load components only when needed (`React.lazy()` + `<Suspense fallback={<Spinner />}>`)
     - reduces initial bundle size
     - applied to components, routes, and images
     - Shimmer Effect / Skeleton UI
       - placeholder UI (spinners) during data/component loading state
   - error boundaries (Render Errors Only)
     - catch & display fallback UI (retry/toasts/messages) on runtime render errors
     - Not for network/data fetching errors (use `try/catch` for that)  

8. Data Fetching
    - multiple fetch requests (parallel `Promise.all()`, sequential, conditional)
    - prevent redundant fetch requests
      - pass data using `<Link state={data}>`
      - access using `useLocation().state`
    - useEffect-based fetching
    - fetch API - `try/catch` + `async/await` + state management
    - Axios - Promise-based HTTP client, interceptors, error handling
      - caching - avoid redundant requests, improve speed
      - polling - `setInterval()` + `fetch/axios`
      - pagination - infinite scroll , query params - `?page=X&limit=Y`, page/limit

9. Routing
    - `react-router` (formerly `react-router-dom`)
    - `createBrowserRouter()`(router), route, path(route prefixes), element/component, children
    - use `<Link>` & `NavLink` (className-`(isActive, isPending) => {}`, to, state)(soft) instead of `<a>` (hard) to prevent reload (uses DOM history API behind the scenes)
    - nested routing - layout, index, `<Outlet>`
    - dynamic routing - `useParams()` - route and query params
    - use `useNavigate()` instead of `useHistory()` (depricated)
    - `useOutletContext()`
    - optional segment/route - `:param?`
    - catch-all - `*` (matches any) or `:param*`
    - error - `useRouteError()`

10. Forms & Validation
    - input handling - using js, using state updation
    - `FormData()` needs `name=""` attribute
    - `e.preventDefault()` - form submission
    - `onChange()` for `input` event - individual states, (optimised) single object as state
    - input field state dynamic updates, custom components
    - controlled components/inputs - `value`/`checked`
      - React manages state
      - one-way data binding / unidirectional data flow (data(state) governs UI(DOM))
    - uncontrolled Components - `defaultValue`, `defaultChecked`, `selected`
      - DOM manages state
    - validation - errors, regex
    - React Hook Form
      - `useForm()`
      - validation, functionality, error handling

11. Context API
    - `createContext()`
    - `Provider`
    - `useContext()` - consume
    - light-dark-theme  
      - disable - prevent multiple submissions

12. Redux Toolkit (RTK) (former react-redux)
    - action - event + additional info (payload-optinal)
    - slice - feature (initial state, reducers)
    - reducer - function
    - store - single source of truth
    - state - data
    - `useSelector()`
    - `useDispatch()`
    - immer
    - middleware
    - [Redux Dev Tools](https://chromewebstore.google.com/detail/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=item-share-cb)

13. State Management Alternatives
    - Redux Thunk → middleware for async logic
    - Zustand → minimal global state manager
    - TanStack Query (React Query) → remote server state manager

14. Build Tools (Babel, Vite, Parcel, Webpack, SWC)
    – static type checking
      – TS, PropTypes
      – catches type errors before runtime
      – enhances DX (autocomplete, error detection)
    - babel
      - JS compiler, transforms JSX -> JS which browser can understand
      - `<script type='text/babel' ></script>`
      - JSXfile as a string -> babel
      - `babel inputFile.js -d outputDir --watch`
    - vite (`vite.config.js`)
      - all js files are bundled into 1
      - uses node server behind the scenes for serving
      - serves `dist` (build output)
      - uses CSR get all code files even for every route
    - parcel
      - easy to learn
      - uses babel
      - create sourcemaps for `node_modules` instead of serving them
    - (SWC) Speedy Web Compiler — a blazing-fast Rust-based compiler that can transpile TS/JS to JS
    - latest versions of build tools auto-import `React` in files which have JSX
    - minified code
    - Source Maps (debgugging)
      - creation
        - `babel inputFile.js -d outputDir --sourcemaps` or
        - `"sourcemaps" : true` in build config file
      - `script.js.map` - sourcemapFile
      - maps compiledCode lines with ourCode lines
      - DevTools creates a request to mapping file
      - if disabled debugger shows compiled code
    - React Dev Tools & Redux Dev Tools (debgugging)
      - profile - records data of every component  

15. Advanced React
    - Refs – `useRef`, `createRef` (DOM access, instance tracking)
    - Forwarding Refs – `forwardRef(child, ref)`  
    - useImperativeHandle – expose child functions/instance methods to parent
    - portals - render outside parent DOM tree (modals)
    - Pure vs Impure Components – optimize re-renders
    - Higher Order Components (HOC) - wrapper
    - React 19 Features

16. Hooks
    - `useState()`
      - uses closures concept behind the scenes
      - returns [value, Function], updates value in array
      - instant - `setValue(previousState => updatedState)`
      - create a state
    - `useEffect()`
      - monitor a state
      - side effect func (mount)
      - clean-up func (unmount)
      - dep list
      - variations (first & every render, 1 & n deps)
      - infinite-rendering
      - add & remove event listeners
      - `fetch()` - data from API
      - `setSomething()` + `clearSomething()`
    - `useReducer()`
    - `useRef()`
      - persists value across re-renders without triggering a render when changed
      - variables vs ref variables
      - returns `{ current : referenceValue }`
      - stores mutable value, DOM access (not reactive)
    - `useMemo()` vs `memo()`
    - `useCallBack()` - prevent unnecesary child component re-renders
    - `useOptimistic()`
    - `use()`
    - `useTransition()`
    - `useActionState()`
    - `useID()`
    - `useMutation()`
    - `useLayoutEffect()`
    - `useImperativeHandle()` - expose instance methods

17. Custom Hooks
    - useWindowSize() - height & width `resize` event(classical)
    - useTheme() - light-dark theme switcher
    - useAuth() - authentication
    - useFilter() - perform queries
    - useLocalStorage() - get, set data
    - useState() - not in-built

## Implementations

- [ ] class-based components
- [ ] all in-built hooks
- [ ] many custom hooks
- [x] theme (light-dark-auto) - React Router (`useOutletContext()`), Context API (`useContext()`)
- [ ] spinner
- [ ] suspense (loading-bar)
- [ ] toaster
- [ ] infinite scroll
- [ ] loading UI (shimmer effect, ~LinkedIn)
- [ ] context menu
- [ ] pop-up modal
- [ ] own react
- [ ] Own Redux

## Things to keep in mind

- passing props - `{{object}}` or `{value}`
- use callback`((e) = {})` for event handlers
- `clearInterval/Timeout()` by storing its ref
- multiple fetch requests - `Promise.all(Promicse[])`
- form - `e.preventDefault()`(submission), `onChange()`(input data), `useState({})`(single object state for input) or `useRef()`

## Uncategorised
