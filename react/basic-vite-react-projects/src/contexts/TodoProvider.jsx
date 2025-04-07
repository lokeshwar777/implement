import React, { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

export default function TodoProvider({ children }) {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );
    const [id, setId] = useState(1);

    const handleCreate = (title) => {
        if (!title) return;
        const newTodo = {
            // id: todos?.length ? Number(todos[todos.length - 1]?.id) + 1 : 1, // not good -> duplicates
            id,
            title,
            isCompleted: false,
        };
        setTodos([...todos, newTodo]);
        setId((prev) => prev + 1);
    };

    const handleEdit = (id, title) => {
        // this approach changes order or todos
        // const remainingTodos = todos.filter((todo) => todo.id !== id);
        // const targetedTodo = todos.filter((todo) => todo.id === id)[0];
        // const updatedTodo = { ...targetedTodo, title };
        // setTodos([...remainingTodos, updatedTodo]);

        setTodos(
            todos.map((todo) => (todo.id !== id ? todo : { ...todo, title }))
        );
    };

    const handleDelete = (id) => {
        const remainingTodos = todos.filter((todo) => todo.id !== id);
        setTodos(remainingTodos);
    };

    const handleToggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id !== id
                    ? todo
                    : { ...todo, isCompleted: !todo.isCompleted }
            )
        );
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider
            value={{
                todos,
                createTodo: handleCreate,
                editTodo: handleEdit,
                deleteTodo: handleDelete,
                toggleTodoCompletion: handleToggleComplete,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}
