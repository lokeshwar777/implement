import React from "react";
import { TodoForm, TodoList } from "./";

export default function TodoApp() {
    return (
        <section className="w-full p-10 justify-items-center dark:bg-zinc-700">
            <h1 className="font-bold text-3xl mb-5">Manage Your TODOs</h1>
            <TodoForm />
            <TodoList />
        </section>
    );
}
