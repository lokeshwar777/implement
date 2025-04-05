import { Link, NavLink } from "react-router";

export default function NavBar() {
    const navLinks = [
        { name: "Home", route: "/" },
        { name: "About", route: "/about" },
        { name: "Projects", route: "/projects" },
        { name: "Github", route: "/github" },
        { name: "Connect", route: "/connect" },
    ];

    return (
        <nav className="h-full flex px-20 w-full gap-5 items-center">
            {/* Logo */}
            <Link to="/">
                <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="h-12 rounded-full"
                />
            </Link>

            {/* Sectoins */}
            <div className="grow-1 text-xl gap-10 flex justify-center">
                {navLinks.map(({ name, route }, index) => (
                    <NavLink
                        key={index}
                        to={route}
                        className={({ isActive }) =>
                            isActive ? "border-b-2 text-red-400" : ""
                        }
                    >
                        {name}
                    </NavLink>
                ))}
            </div>

            {/* Socials */}
            {/* TODO : add socials if needed */}

            {/* Auth */}
            {/* Use these routes if needed */}
            {/* <Link className="p-2 bg-gray-500 rounded-md" to="/login">
                Login
            </Link>
            <Link className="p-2 bg-slate-500 rounded-md" to="/signup">
                Get Started
            </Link> */}
        </nav>
    );
}
