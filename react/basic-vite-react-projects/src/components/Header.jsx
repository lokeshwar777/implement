import NavBar from "./NavBar";

export function Header() {
    return (
        <header className="fixed top-0 w-full dark:bg-gray-800 h-15 place-items-center shadow-md">
            <NavBar />
        </header>
    );
}
