import React from "react";
import { useSelector } from "react-redux";
import ReduxTodoItem from "./ReduxTodoItem";

export default function ReduxTodoList() {
    const todos = useSelector((state) => state.todos);

    if (!todos?.length) return <p className="text-xl">No Todos</p>;

    return (
        <ul className="overflow-auto  max-h-60">
            {todos.map((todo) => (
                <ReduxTodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}
