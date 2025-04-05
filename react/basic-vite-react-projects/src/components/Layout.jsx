import { useContext } from "react";
import { Outlet } from "react-router";
import ThemeContext from "../contexts/ThemeContext";
import { Footer } from "./Footer";
import { Header } from "./Header";

function Layout() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div
            className="min-h-screen flex flex-col dark:bg-gray-700 dark:text-slate-300"
            data-theme={darkMode ? "dark" : "light"}
        >
            <Header />
            <main className="mt-15 flex grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
