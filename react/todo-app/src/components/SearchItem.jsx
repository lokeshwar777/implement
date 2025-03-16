// import { FaSearch } from "react-icons/fa";
import React from "react";

export default function SearchItem({ search, setSearch }) {
  return (
    <>
      <form
        className="flex items-center bg-slate-700 py-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="SearchItem" className="invisible w-0"></label>
        <input
          id="SearchItem"
          type="text"
          className="mx-1 grow rounded-lg px-2 text-xl dark:bg-gray-400 dark:text-black"
          placeholder="What do you need!"
          role="searchbox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <button
          type="submit"
          aria-label="Add task"
          className="scale-150 px-2 text-yellow-500 hover:cursor-pointer hover:text-green-300"
        >
          <FaSearch />
        </button> */}
      </form>
    </>
  );
}
