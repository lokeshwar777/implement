import React, { useCallback, useEffect, useRef, useState } from "react";

export default function MemoiseFunction() {
    const [name, setName] = useState("");
    const [num1] = useState(7);
    const [num2] = useState(9);

    const add = () => num1 + num2;
    const memoAdd = useCallback(() => num1 + num2, [num1, num2]);

    const addRef = useRef(add);
    const memoAddRef = useRef(memoAdd);

    useEffect(() => {
        if (add !== addRef.current) {
            console.log("add function reference changed");
        }

        if (memoAdd === memoAddRef.current) {
            console.log(
                "memoAdd function reference is not changed as we are using useCallback for memoising it",
            );
        }

        // console.log("add === addRef.current", add === addRef.current);
        // console.log(
        //   "memoAdd === memoAddRef.current",
        //   memoAdd === memoAddRef.current,
        // );
    }, [add, memoAdd]); // memoAdd is not needed but included just for fun

    return (
        <div className="min-h-screen content-center text-center">
            <label htmlFor="name" className="hidden"></label>
            <input
                className="rounded-2xl bg-slate-300 p-3"
                type="text"
                id="name"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
            />
            <p className="mt-10 text-2xl">Your Name : {name}</p>
        </div>
    );
}
