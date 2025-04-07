import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useTodo } from "../../contexts/TodoContext";

export default function TodoItem({ todo }) {
    const { editTodo, deleteTodo, toggleTodoCompletion } = useTodo();
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(todo.title);

    const todoRef = useRef(null);

    const handleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    const handleSave = useCallback(() => {
        const trimmedTitle = updatedTitle.trim();
        if (!trimmedTitle) {
            setUpdatedTitle(todo.title);
        } else if (todo.title !== updatedTitle) {
            editTodo(todo.id, updatedTitle.trim());
        }
        setIsEditing((prev) => !prev);
    }, [editTodo, todo.id, todo.title, updatedTitle]);

    const handleDelete = () => {
        deleteTodo(todo.id);
    };

    const handleTodoCompletion = () => {
        toggleTodoCompletion(todo.id);
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
            <label htmlFor="completed" hidden>
                completed
            </label>
            <input
                id="completed"
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
                        autoFocus
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
