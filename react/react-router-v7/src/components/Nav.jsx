import { NavLink } from "react-router";

export default function Nav({ search, setSearch }) {
  return (
    <nav className="mx-1 flex">
      <form className="grow" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search" className="invisible w-0"></label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg px-1 text-xl dark:bg-gray-400 dark:text-black"
        />
      </form>
      {/* TODO : imporove readablity and visual appeal */}
      <ul className="flex">
        <li className="dark:border">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "dark:border-2 dark:border-purple-50 dark:bg-amber-400 dark:text-amber-900"
                : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="dark:border">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "dark:border-2 dark:border-purple-50 dark:bg-amber-400 dark:text-amber-900"
                : ""
            }
            to="/posts"
          >
            Post
          </NavLink>
        </li>
        <li className="dark:border">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "dark:border-2 dark:border-purple-50 dark:bg-amber-400 dark:text-amber-900"
                : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
