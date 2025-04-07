import React from "react";
import { useTodo } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const { todos } = useTodo();

    if (!todos?.length) return <p className="text-xl">No Todos</p>;

    return (
        <ul className="overflow-auto  max-h-60">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}
