import React from "react";
import { Link } from "react-router";

export default function Projects() {
    const projects = [
        {
            route: "/projects/background-color-changer",
            name: "Backgound Color Changer",
        },
        {
            route: "/projects/random-password-generator",
            name: "Random Password Generator",
        },
        {
            route: "/projects/currency-converter",
            name: "Currency Converter",
        },
        {
            route: "/github",
            name: "GitHub Lookup",
        },
        {
            route: "/projects/todo-app",
            name: "TODO App",
        },
    ];

    return (
        <ul className="list-decimal list-inside p-10 text-xl grow-1">
            {projects.map(({ route, name }, index) => (
                <li key={index}>
                    <Link to={route}>{name}</Link>
                </li>
            ))}
        </ul>
    );
}
