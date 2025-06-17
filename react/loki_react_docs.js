/**
 * importing `React` is not mandatory for stateless components from React 17 (refer to this - https://stackoverflow.com/questions/44141010/do-i-need-to-import-react-for-stateless-functional-components)
 * do not forget to use the `key` while rendering lists
 * think of vite hot reload in case of any unexpected behaviour
 */

// node modules (description - copilot)
/**
 * react - core - to create react components - 19
 * react-dom - browsers - to render react components
 * react-native - mobile apps -
 * react-icons - (TODO app - add) - a collection of icons
 * tailwindcss - a utility-first CSS framework - v4
 * prettier-plugin-tailwindcss - sort css classes
 * vite - a build tool
 * colornames - (ColorChanger) - to get the color name from the hex code
 * date-fns -
 * react-router-dom -
 * react-router - v7 - nested routing
 * axios - response.json() and if(!response.ok) are in-built
 */

// hooks and components
/**
 * react-dom - createRoot
 * react - StrictMode,  useState, useEffect, useContext,
 * react-router - BrowserRouter, Route, Routes, useNavigate(), Link, NavLink className=`({isActive,isLoading})=>{}`, useParams, loader, RouterProvider
 *
 * useState - update variables on changes
 * useEffect - asynchronous DOM painting
 * useLayoutEffect - synchronous DOM painting
 * useRef - ref does not trigger a re-render
 * useCallback - memoise a reference (function)
 * useMemo - memoise a value (function)
 * useContext - small or simple state management
 * useReducer - state should be manipulated only through reducers(functions)
 */

// uncategorised
/**
 * fetchAPI - fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
 * axios - axios.create([config])
 * abort controller - https://developer.mozilla.org/en-US/docs/Web/API/AbortController
 * custom hooks (self created, rules) - useWindowSize(), useAxiosFetch()
 * state management - useReducer -> contextAPI -> Redux + Thunk -> Redux Toolkit, Zustand, React Query
 */

// best practices (do not forget)
/**
 * <form onSubmit={(e) => e.preventDefault()}>
 * <label/> for every <input/>
 * value={stateName}
 * onChange=(e=>setStateName(e.target.value))
 * <button type="button" or type="submit" onClick={()=>handleSubmit(params)}>
 * small modular components
 * use Link or NavLink instead of <a/>(reloads)
 */

// Research
/**
 * Web API - https://developer.mozilla.org/en-US/docs/Web/API
 * Web Workers API - https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
 */

// clarity for common confusions
/**
 * fetch(url,{headers:{},}).then(response=>response.json()).then(data=>data).catch((error) => console.log(`Error : ${error}`));
 * axios - has inbuilt response.json()
 */

// State Management
/** 
 * context API - state management - imporovises on prop drilling, decoupling independent components
 * redux-saga - 

// Redux Toolkit (GPT)
 * thunk - a piece of code that does some delayed work
 * RTK - Wraps classic Redux into easier, cleaner code
 * Store - Holds global state and connects everything together
 * State - The actual data tree inside the store
 * Dispatch - Sends an action to the reducer, stable — it doesn’t change between renders.
 * Action - Describes what happened (just { type, payload })
 * Payload - The data sent with an action (optional)
 * Reducer - Pure function: (state, action) => newState
 * Selector - Extracts specific data from state (used in UI)
 * createSlice - initialState + reducers + auto magic
 * Slice - Bundle of state + reducer logic for one feature
 * Action Creator - Function that returns { type, payload }
 * caseReducer - One reducer inside the reducers map
 * configureStore - Initializes the store with all slices + middleware
 * createAsyncThunk - Handles async actions + auto states (loading, success, fail)
 * extraReducers - Lets a slice handle actions from other slices or thunks
 * Middleware - Intercepts actions (logging, API calls, etc.)
 * Immer - Lets you write "mutating" code safely under the hood
 * 
 * Subscribe - listens to changes in store and executes code
 */

// core
/**
 * React.createElement('elementName', { className: 'someClasses', id: 'someID', key: someKey, htmlFor: 'someFor', ...}, 'someTextContent' or nodes/children[])
 * const root = React.createRoot(elementName)
 * custom react element object
 * root.render({$$typeof: Symbol.for('react.element'), type:'elementName', ref:null, props:{}}) (type is tagName)
 * if Function(component) is givent to type it is called and returns a react element object
 * key errors/warnings
 * style is an object not string & camelCase
 */
