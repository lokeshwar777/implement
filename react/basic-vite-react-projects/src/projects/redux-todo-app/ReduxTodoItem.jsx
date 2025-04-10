import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
    deleteTodo,
    editTodo,
    toggleTodoCompletion,
} from "../../slices/todoSlice";

export default function ReduxTodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(todo.title);
    const editRef = useRef(null);
    const todoRef = useRef(null);
    const dispatch = useDispatch();

    const handleEdit = () => {
        setIsEditing((prev) => !prev);
        editRef.current.focus();
    };

    const handleSave = useCallback(() => {
        const trimmedTitle = updatedTitle.trim();
        if (!trimmedTitle) {
            setUpdatedTitle(todo.title);
        } else if (todo.title !== updatedTitle) {
            dispatch(editTodo({ id: todo.id, title: updatedTitle.trim() }));
        }
        setIsEditing((prev) => !prev);
    }, [dispatch, todo.id, todo.title, updatedTitle]); // Safe to add dispatch to the dependencies array

    const handleDelete = () => {
        dispatch(deleteTodo({ id: todo.id }));
    };

    const handleTodoCompletion = () => {
        dispatch(toggleTodoCompletion({ id: todo.id }));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isEditing && !todoRef.current?.contains(event.target))
                handleSave();
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [isEditing, handleSave]);

    useEffect(() => {
        setUpdatedTitle(todo.title);
    }, [todo]);

    return (
        <li
            key={todo.id}
            className={`h-10 rounded-md  my-2 text-black flex gap-4 items-center ${
                todo.isCompleted ? "dark:bg-green-500" : "dark:bg-gray-300"
            }`}
            ref={todoRef}
        >
            <label htmlFor={`completed-${todo.id}`} hidden>
                completed
            </label>
            <input
                id={`completed-${todo.id}`}
                type="checkbox"
                defaultChecked={todo.isCompleted}
                className="scale-125 ml-2"
                onChange={handleTodoCompletion}
            />
            {isEditing ? (
                <>
                    <input
                        className="truncate w-sm"
                        type="text"
                        id={todo.id}
                        readOnly={!isEditing}
                        aria-label="edit-todo"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.code === "Enter") handleSave();
                        }}
                        // autoFocus
                        ref={editRef}
                    />
                    <button
                        onClick={handleSave}
                        className="scale-150"
                        type="button"
                    >
                        <FaSave />
                    </button>
                </>
            ) : (
                <>
                    <p
                        className={`truncate w-sm ${
                            todo.isCompleted ? "line-through" : ""
                        }`}
                    >
                        {updatedTitle}
                    </p>
                    <button onClick={handleEdit} className="scale-150">
                        <FaEdit />
                    </button>
                </>
            )}
            <button onClick={handleDelete} className="scale-150 mr-2">
                <MdDelete />
            </button>
        </li>
    );
}
