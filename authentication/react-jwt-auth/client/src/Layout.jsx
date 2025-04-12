import { Link, Outlet } from "react-router";
import ToggleDarkMode from "./utils/ToggleDarkMode";

export default function Layout() {
  return (
    <div className="min-h-screen dark:bg-black">
      <div className="flex items-center justify-center gap-10 py-3">
        <Link
          to="/login"
          className="rounded-md bg-sky-500 p-2 text-white dark:bg-sky-300 dark:text-black"
        >
          <button className="hover:cursor-pointer">Login</button>
        </Link>
        <Link
          to="/register"
          className="rounded-md bg-sky-500 p-2 text-white dark:bg-sky-300 dark:text-black"
        >
          <button className="hover:cursor-pointer">Register</button>
        </Link>
        <ToggleDarkMode />
      </div>
      <Outlet />
    </div>
  );
}
