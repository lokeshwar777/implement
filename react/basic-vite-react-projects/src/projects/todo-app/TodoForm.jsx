import React, { useState } from "react";
import { useTodo } from "../../contexts/TodoContext";
import { MdAddCircleOutline } from "react-icons/md";

export default function TodoForm() {
    const [title, setTitle] = useState("");

    const { createTodo } = useTodo();

    const handleTitleChange = (e) => setTitle(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(title.trim());
        setTitle("");
    };

    return (
        <form className="flex w-xl gap-4 items-center justify-center">
            <label htmlFor="todo-input" className="hidden"></label>
            <input
                type="text"
                id="todo-input"
                autoFocus
                placeholder="Create TODO..."
                value={title}
                onChange={handleTitleChange}
                className="grow bg-slate-400 rounded-md text-slate-900 p-2 my-3 max-w-md"
            />
            <button
                onClick={handleSubmit}
                type="submit"
                className="dark:bg-sky-400 text-black scale-225 h-fit rounded-full"
            >
                <MdAddCircleOutline />
            </button>
        </form>
    );
}
