import { Link } from "react-router";

function Layout() {
    return (
        <ul className="list-decimal list-inside p-10 my-5 grow-1">
            <li className="">
                <Link to="/background-color-changer">
                    Backgound Color Changer
                </Link>
            </li>
            <li className="">
                <Link to="/random-password-generator">
                    Random Password Generator
                </Link>
            </li>
            <li className="">
                <Link to="/currency-converter">Currency Converter</Link>
            </li>
        </ul>
    );
}

export default Layout;
