import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function LineItem({ item, handleCheck, handleDelete }) {
  return (
    <>
      <li
        key={item.id}
        className="flex max-h-19 items-center gap-2 p-2 text-slate-200 dark:odd:bg-gray-600 dark:even:bg-gray-800 dark:hover:bg-zinc-500 dark:hover:text-black"
      >
        <input
          className="scale-125"
          type="checkbox"
          checked={item.isCompleted}
          onChange={() => handleCheck(item.id)}
        />
        <label
          className={`grow ${item.isCompleted && "line-through"}`}
          onDoubleClick={() => handleCheck(item.id)}
        >
          {item.description}
        </label>
        <FaTrashAlt
          role="button"
          className="hover:cursor-pointer dark:text-red-600 dark:hover:text-red-300"
          tabIndex={0}
          onClick={() => handleDelete(item.id)}
        />
      </li>
    </>
  );
}
