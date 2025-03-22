import toHex from "colornames";
import { useState, React, useRef } from "react";

export default function ColorChanger() {
    const [color, setColor] = useState("");
    const [hexColor, setHexColor] = useState("");
    const [darkState, setDarkState] = useState(true);

    return (
        <>
            <div className="h-full flex flex-col items-center justify-center dark:text-zinc-300">
                <div
                    style={{
                        backgroundColor: color || "white",
                        color: darkState ? "white" : "black",
                    }}
                    className="flex flex-col items-center justify-center w-2xs h-48 border-2 border-white
                rounded-md mb-5"
                >
                    <p>{color || "empty"}</p>
                    <p>{hexColor}</p>
                </div>

                <input
                    type="search"
                    value={color}
                    autoFocus
                    className="p-2 rounded-xl border-2 border-sky-300 dark:bg-gray-700 dark:text-white placeholder:dark:text-white w-3xs"
                    onInput={(e) => {
                        setColor(e.target.value);
                        setHexColor(toHex(e.target.value));
                    }}
                    placeholder="Type a color to see the magic"
                />

                <button
                    className="rounded-md mt-5 p-2 border-2 bg-black"
                    onClick={(e) => setDarkState(!darkState)}
                >
                    Toggle Text Color
                </button>
            </div>
        </>
    );
}
