// src/app/store.js -> best practice
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";

// scalable;
const rootReducer = combineReducers({
    todos: todoReducer,
    // other reducers go here...
});

const todoStore = configureStore({
    reducer: rootReducer,
});

const setTodosToLocalStorage = (state) => {
    try {
        const serialisedState = JSON.stringify(state.todos);
        localStorage.setItem("todos", serialisedState);
    } catch (error) {
        console.warn(error);
    }
};

todoStore.subscribe(() => setTodosToLocalStorage(todoStore.getState()));

export default todoStore;
