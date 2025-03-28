import Link from "next/link";
import Search from "./Search";

export default function NavBar() {
    return (
        <>
            <h1>
                <Link href="/">Wiki Rocket</Link>
            </h1>
            <Search />
        </>
    );
}
