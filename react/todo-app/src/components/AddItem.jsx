import { FaSquarePlus } from "react-icons/fa6";
import React from "react";

export default function AddItem({ newItem, setNewItem, handleCreate }) {
  return (
    <>
      <form
        className="flex items-center bg-slate-700 py-2"
        onSubmit={handleCreate}
      >
        <label
          htmlFor="addTask"
          // className="w-7 text-sm leading-4 text-yellow-500"
          className="invisible w-0"
        ></label>
        <input
          id="addTask"
          type="text"
          className="mx-1 grow rounded-lg px-2 text-xl dark:bg-gray-400 dark:text-black"
          placeholder="What's next!"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          required
          autoFocus
        />
        <button
          type="submit"
          aria-label="Add task"
          className="scale-170 px-2 text-yellow-500 hover:cursor-pointer hover:text-green-300"
        >
          <FaSquarePlus />
        </button>
      </form>
    </>
  );
}
