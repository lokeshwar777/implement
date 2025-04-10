import React from "react";
import { ReduxTodoForm, ReduxTodoList } from ".";

export default function ReduxTodoApp() {
    return (
        <section className="w-full p-10 justify-items-center dark:bg-zinc-700">
            <h1 className="font-bold text-3xl mb-5">Manage Your TODOs</h1>
            <ReduxTodoForm />
            <ReduxTodoList />
        </section>
    );
}
