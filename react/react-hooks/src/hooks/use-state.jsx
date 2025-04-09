import React, { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const [values, setValues] = useState({ firstName: "", lastName: "" });

    const increment = () => {
        // if counter is 10
        setCounter(counter + 1); // sets counter to 11
        // setCounter(counter + 1); // sets counter to 11 not 12

        // instead use this
        // setCounter((prev) => prev + 1); // sets counter to 11
        // setCounter((prev) => prev + 1); // sets counter to 12
    };

    const decrement = () => {
        setCounter((prev) => prev - 1);
    };

    const updateValues = (newValue) => {
        setValues({ ...values, lastName: newValue.lastName });
        setValues((prev) => ({ ...prev, lastName: newValue.lastName }));
    };

    return (
        <div className="h-screen place-items-center content-center text-2xl text-black">
            <p className="text-3xl">{counter}</p>
            {/* pass reference of increment function */}
            <button
                className="m-5 scale-150 rounded-md border-2 border-black bg-sky-400 px-2"
                onClick={increment}
            >
                +
            </button>
            {/* onClick can be defined in 2 ways */}
            <button
                className="m-5 scale-150 rounded-md border-2 border-black bg-red-400 px-2"
                onClick={() => decrement()}
            >
                -
            </button>
            {/* execute the decrement function when clicked */}
        </div>
    );
}
