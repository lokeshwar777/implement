import React, { useReducer } from "react";

const ACTION = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    CHANGE_USER_INPUT: "change-user-input",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        case "change-user-input":
            return { ...state, userInput: action.payload };
        default:
            return state;
    }
};

export default function ComplexStateManagement() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        userInput: "",
    });

    const handleIncrement = () => {
        dispatch({ type: ACTION.INCREMENT });
    };

    const handleDecrement = () => {
        dispatch({ type: ACTION.DECREMENT });
    };

    const handleInputChange = (e) => {
        dispatch({ type: ACTION.CHANGE_USER_INPUT, payload: e.target.value });
    };

    return (
        <main className="flex min-h-screen flex-col items-center gap-10 pt-10 dark:bg-black dark:text-white">
            <h1 className="text-5xl dark:text-neutral-300">State Management</h1>
            <p className="text-4xl dark:text-neutral-400">
                {state.userInput.trim() || "Text will display here..."}
            </p>
            <p className="text-4xl dark:text-neutral-400">{state.count}</p>
            <section className="flex items-center justify-center gap-5">
                <button
                    type="button"
                    className="cursor-pointer rounded-md p-2 px-5 dark:bg-slate-500 dark:text-black"
                    onClick={handleIncrement}
                >
                    +
                </button>
                <button
                    className="cursor-pointer rounded-md p-2 px-5 dark:bg-slate-500 dark:text-black"
                    onClick={handleDecrement}
                >
                    -
                </button>
            </section>
            <label htmlFor="user-input"></label>
            <input
                type="text"
                placeholder="Enter text here"
                id="user-input"
                defaultValue={state.userInput}
                onChange={handleInputChange}
                className="w-md rounded-md border-2 border-white bg-slate-500 p-2"
            />
        </main>
    );
}
