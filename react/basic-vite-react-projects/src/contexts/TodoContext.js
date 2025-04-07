import { createContext, useContext } from "react";

const TodoContext = createContext({
    // fallback
    todos: [],
    createTodo: (title) => {
        console.log(`create todo with title : ${title}`);
    },
    editTodo: (id, updatedTitle) => {
        console.log(`update todo ${id} , with title : ${updatedTitle}`);
    },
    deleteTodo: (id) => {
        console.log(`delete todo with title : ${id}`);
    },
    toggleTodoCompletion: (id) => {
        console.log(`toggle todo with id : ${id} completion status`);
    },
});

export default TodoContext;

export const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) console.log("TodoContext must be used within a Provider");
    return context;
};
