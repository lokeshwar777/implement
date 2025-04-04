import React, { useCallback, useEffect, useRef, useState } from "react";

export default function RandomPasswordGenerator() {
    const [password, setPassword] = useState("sample");
    const [passwordLength, setPasswordLength] = useState(8);
    const [areDigitsAllowed, setAreDigitsAllowed] = useState(true);
    const [areAlphabetsAllowed, setAreAlphabetsAllowed] = useState(true);
    const [areSpecialCharactersAllowed, setAreSpecialCharactersAllowed] =
        useState(true);

    const copyButtonRef = useRef(null);

    // overkill
    /*
    // 1. useMemo - define function and memoise the value
    const generatePassword = useMemo(() => {
        if (
            !areDigitsAllowed &&
            !areAlphabetsAllowed &&
            !areSpecialCharactersAllowed
        )
        return "";
        
        const digits = "0123456789";
        const alphabets =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const specialCharacters = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
        
        let pwd = "";
        let allowed = "";
        if (areDigitsAllowed) allowed += digits;
        if (areAlphabetsAllowed) allowed += alphabets;
        if (areSpecialCharactersAllowed) allowed += specialCharacters;
        
        for (let i = 0; i < passwordLength; ++i) {
            const randomIndex = Math.floor(Math.random() * allowed.length);
            pwd += allowed[randomIndex];
        }
        
        return pwd;
    }, [
        passwordLength,
        areDigitsAllowed,
        areAlphabetsAllowed,
        areSpecialCharactersAllowed,
    ]);
    
    // 2. useCallback - memoise the function reference - prevents function re-creation
    const memoisedGeneratePassword = useCallback(
        () => generatePassword,
        [generatePassword]
    );

    useEffect(() => {
        setPassword(memoisedGeneratePassword());
    }, [memoisedGeneratePassword]);
    */

    const memoisedGeneratePassword = useCallback(() => {
        if (
            !areDigitsAllowed &&
            !areAlphabetsAllowed &&
            !areSpecialCharactersAllowed
        )
            return "";

        const digits = "0123456789";
        const alphabets =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const specialCharacters = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

        let pwd = "";
        let allowed = "";
        if (areDigitsAllowed) allowed += digits;
        if (areAlphabetsAllowed) allowed += alphabets;
        if (areSpecialCharactersAllowed) allowed += specialCharacters;

        for (let i = 0; i < passwordLength; ++i) {
            const randomIndex = Math.floor(Math.random() * allowed.length);
            pwd += allowed[randomIndex];
        }

        return pwd;
    }, [
        passwordLength,
        areDigitsAllowed,
        areAlphabetsAllowed,
        areSpecialCharactersAllowed,
    ]);

    useEffect(() => {
        setPassword(memoisedGeneratePassword());
    }, [memoisedGeneratePassword]);

    const copyToClipboard = () => {
        // console.log(copyButtonRef.current.innerText);
        navigator.clipboard
            .writeText(password)
            .then(() => {
                // alert("Password copied");
                // console.log("Password copied to clipboard.");
            })
            .catch((e) => {
                console.log("error", e);
            });
        // console.log(
        //     navigator.clipboard
        //         .readText()
        //         .then((data) => console.log("data", data))
        // );
        copyButtonRef.current.innerText = "copied";
        copyButtonRef.current.disabled = true;
        setTimeout(() => {
            copyButtonRef.current.disabled = false;
            copyButtonRef.current.innerText = "Copy";
        }, 3000);
    };

    return (
        <div className="min-h-screen place-items-center">
            <main className="dark:bg-slate-700 bg-gray-700 w-xl mt-10 rounded-xl py-3 px-5 flex flex-col">
                <section className="flex h-10">
                    <p className="py-2 bg-amber-100 w-xs dark:text-amber-900 px-3 rounded-l-xl overflow-x-auto grow-1 whitespace-nowrap">
                        {password}
                    </p>
                    <button
                        className="px-2 py-1 bg-blue-600 rounded-r-xl hover:disabled:cursor-not-allowed"
                        onClick={copyToClipboard}
                        ref={copyButtonRef}
                    >
                        Copy
                    </button>
                    <button
                        className="bg-amber-400 rounded-md ml-3 px-2 text-sm"
                        onClick={() => setPassword(memoisedGeneratePassword())}
                    >
                        Generate New
                    </button>
                </section>
                <section className="pt-4 flex text-sm gap-2 text-orange-400">
                    <input
                        type="range"
                        id="passwordLength"
                        value={passwordLength}
                        onChange={(e) => setPasswordLength(e.target.value)}
                    />
                    <label htmlFor="passwordLength" className="w-21">
                        Length ({passwordLength})
                    </label>

                    <input
                        type="checkbox"
                        id="digits"
                        checked={areDigitsAllowed}
                        onChange={(e) => setAreDigitsAllowed(e.target.checked)}
                    />
                    <label htmlFor="digits">Digits</label>

                    <input
                        type="checkbox"
                        id="alphabets"
                        checked={areAlphabetsAllowed}
                        onChange={(e) =>
                            setAreAlphabetsAllowed(e.target.checked)
                        }
                    />
                    <label htmlFor="alphabets">Alphabets</label>

                    <input
                        type="checkbox"
                        id="specialCharacters"
                        checked={areSpecialCharactersAllowed}
                        onChange={(e) =>
                            setAreSpecialCharactersAllowed(e.target.checked)
                        }
                    />
                    <label htmlFor="specialCharacters">
                        Special Characters
                    </label>
                </section>
            </main>
        </div>
    );
}
