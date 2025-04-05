import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

function Layout() {
    return (
        <div className="min-h-screen flex flex-col dark:bg-gray-700">
            <Header />
            <main className="mt-15 flex grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
