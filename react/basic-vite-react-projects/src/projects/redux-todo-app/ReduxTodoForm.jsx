import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { createTodo } from "../../slices/todoSlice";

export default function ReduxTodoForm() {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const handleTitleChange = (e) => setTitle(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createTodo({ title: title.trim() }));
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
