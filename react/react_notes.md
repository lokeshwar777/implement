# React notes (only theory)

1. Basic & Intro
   - library, fast dev, easy & efficient state management
   - virtual DOM, react fibre, JSX
   - reconciliation & diffing algo
   - SPA (Single Page Application)
   - StrictMode (dev)
   - Babel
   - source maps
   - Parcel
   - declarative programming
   - [React Dev Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

2. Components
   - class & functional
   - returns JSX
   - `<Fragment></Fragment>` or `<></>`
   - styled component
  
3. Props
   - default
   - destructuring
   - children
   - derived state & state lifting (sync using parent)
   - prop drilling

4. Rendering
   - Conditional - `&&`, `() ? :`, `!!`, `if-else`, early return
   - short circuit eval
   - looping, key
   - Shimmer Effect

5. Event Handling

6. Routing
   - react-router
   - router, route, path
   - use `<Link>` & `NavLink` (`isActive`-className) instead of `<a>`
   - nested routing - `<Outlet>`, `*` (matches any)
   - `useParams()` - route and query params
   - use `useNavigate()` instead of `useHistory()` (depricated)
   - layout & index

7. React Hook Form
   - `useForm()`
   - validation, functionality, error handling
   - disable - prevent multiple submissions

8. Redux Thunk

9. (RTK) Redux Toolkit (former react-redux)
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

10. Zustand

11. TanStack Query

12. React Native

13. Axios

14. Lazy Loading
    - code splitting  

15. Hooks
    - custom hooks
    - `useState()`
    - `useEffect()`
      - side effect func (mount)
      - clean-up func (unmount)
      - dep list
      - variations (first & every render, 1 & n deps)
      - infinite-rendering
      - add & remove event listeners
    - `useContext()`
      - contextAPI - create, provide, consume
      - light-dark-theme
    - `useReducer()`
    - `useRef()` - persists value across re-renders
    - `useMemo()` vs `memo()`
    - `useCallBack()` - prevent unnecesary child component re-renders
    - `useOptimistic()`
    - `use()`
    - `useTransition()`
    - `useActionState()`
    - `useID()`
    - `useMutation()`
    - `useLayoutEffect()`
    - `useImperativeHandle()`

## Implementations

- [x] theme (light-dark-auto)
- [ ] spinner
- [ ] suspense (loading-bar)
- [ ] toaster
- [ ] infinite scroll

## Uncategorised

- optional segment
- controlled & uncontrolled component
- higer order components
- component rules
- react query
- pure & impure components
- portals
- refs & forwarding refs
- error boundaries
- static type checking
- react 19
