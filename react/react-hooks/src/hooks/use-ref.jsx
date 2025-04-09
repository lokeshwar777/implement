import React, { useRef, useState } from "react";

// TODO : try to achieve the same functionality without using the isActive state
export default function StopWatch() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const timerId = useRef(null);
    //   const [renders, setRenders] = useState(0); // TODO : keep tract of renders count

    const handleStart = () => {
        if (timerId?.current) return;
        timerId.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);
        setIsActive(true);
    };

    const handleStop = () => {
        clearInterval(timerId.current);
        timerId.current = null;
        setIsActive(false);
    };

    const handleReset = () => {
        handleStop();
        setSeconds(0);
    };

    return (
        <main className="flex min-h-screen flex-col items-center gap-10 pt-10 dark:bg-black dark:text-white">
            <h1 className="text-5xl dark:text-neutral-300">
                Stopwatch / Timer
            </h1>
            <p className="text-4xl dark:text-neutral-400">{seconds}</p>
            <section className="flex items-center justify-center gap-5">
                <button
                    type="button"
                    className="cursor-pointer rounded-md p-2 px-5 disabled:cursor-not-allowed dark:bg-slate-500 dark:text-black"
                    onClick={handleStart}
                    disabled={isActive}
                >
                    Start
                </button>
                <button
                    className="cursor-pointer rounded-md p-2 px-5 disabled:cursor-not-allowed dark:bg-slate-500 dark:text-black"
                    onClick={handleStop}
                    disabled={!isActive}
                >
                    Stop
                </button>
                <button
                    className="cursor-pointer rounded-md p-2 px-5 disabled:cursor-not-allowed dark:bg-slate-500 dark:text-black"
                    onClick={handleReset}
                    disabled={seconds === 0}
                >
                    Reset
                </button>
            </section>
        </main>
    );
}
