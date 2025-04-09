import React from "react";
import { Link } from "react-router";
import { hooks } from "../routes/react-hooks";

export default function Hooks() {
    return (
        <>
            <ul className="p-5">
                {hooks?.length &&
                    hooks.map((hook, index) => (
                        <Link key={index} to={hook.route}>
                            <p>
                                {index + 1}. {hook.title}
                            </p>
                        </Link>
                    ))}
            </ul>
        </>
    );
}
