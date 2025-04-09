import React, { useCallback, useEffect, useMemo, useState } from "react";

export default function MemoiseValue() {
    const [num, setNum] = useState(0);
    const [inputNum, setInputNum] = useState("");
    const [result, setResult] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const calculatePowerOfTwo = useCallback((num) => {
        let ans = 1;
        for (let i = 0; i < 2 ** (num - 1); ++i) {
            ans += 1;
        }
        return ans;
    }, []);
    // const calculatePowerOfTwo = (num) => 2 ** num;

    const memoisedResult = useMemo(
        () => calculatePowerOfTwo(num),
        [calculatePowerOfTwo, num],
    );

    useEffect(() => {
        if (!isLoading) return;
        setTimeout(() => {
            setResult(memoisedResult);
        }, 0);
        setIsLoading(false);
    }, [isLoading, memoisedResult]);

    const handleClick = async () => {
        const n = Number(inputNum);
        if (isNaN(n) || n < 0) {
            setResult("Enter a valid number!");
            setTimeout(() => {
                setResult(0);
            }, 2000);
            return;
        }

        setIsLoading(true); // requires async behaviour to see changes in  UI
        await new Promise((resolve) => setTimeout(resolve, 0));
        setNum(n);
    };

    return (
        <div className="min-h-screen content-center text-center dark:bg-slate-500">
            <p className="text-2xl">2's Power</p>
            <label className="hidden" htmlFor="inputNum"></label>
            <input
                id="inputNum"
                type="text"
                placeholder="Enter a num"
                value={inputNum}
                onChange={(e) => setInputNum(e.target.value)}
                className="m-5 rounded-md border-2 bg-amber-600 p-2"
            />
            <button
                onClick={handleClick}
                className="rounded-md border-2 bg-sky-500 p-2"
                disabled={isLoading}
            >
                Calculate
            </button>
            {isLoading ? <p>Calculating ...</p> : <p>Result : {result}</p>}
        </div>
    );
}

// TODO : Try useMemo on Fibonacci

/*

import React, { useMemo, useState } from "react";

const fibonacci = (n) => {
	if (n == 1 || n == 0) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
};

export default function MemoiseValue() {
	const [num, setNum] = useState(0);
	const [result, setResult] = useState(0);

	const memoisedFibonacci = useMemo(() => fibonacci(Number(num)), [num]);

	const handleClick = () => {
		const n = Number(num);
		if (isNaN(n) || n < 0) {
			setResult("Enter a valid number!");
			setTimeout(() => {
				setResult(0);
			}, 2000);
			return;
		}
		try {
			setResult(fibonacci(n));
			// setResult(memoisedFibonacci(n));
		} catch (error) {
			setResult("number is Too Large!");
			console.log("error : ", error.message);
		}
	};

	return (
		<div className="min-h-screen content-center text-center">
			<p className="text-2xl">Get Fibonacci Number</p>
			<label className="hidden" htmlFor="num"></label>
			<input
				id="num"
				type="text"
				placeholder="Enter a num"
				value={num}
				onChange={(e) => setNum(e.target.value)}
				className="m-5 rounded-md border-2 bg-amber-600 p-2"
			/>
			<button
				onClick={handleClick}
				className="rounded-md border-2 bg-sky-500 p-2"
			>
				Calculate
			</button>
			<p>Result : {result}</p>
		</div>
	);
}
*/
