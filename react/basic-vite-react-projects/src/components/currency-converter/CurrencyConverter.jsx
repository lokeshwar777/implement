import React, { useState } from "react";
import { getLatestCurrencyMultiplier } from "./CurrencyInfo";
import CurrencySelector from "./CurrencySelector";

export default function CurrencyConverter() {
    const [sourceCurrency, setSourceCurrency] = useState("USD");
    const [destinationCurrency, setDestinationCurrency] = useState("INR");
    const [sourceValue, setSourceValue] = useState(0);
    const [destinationValue, setDestinationValue] = useState(0);

    const handleConvert = async () => {
        const multiplier = await getLatestCurrencyMultiplier(
            sourceCurrency,
            destinationCurrency
        );
        setDestinationValue(sourceValue * multiplier);
    };

    const handleSwap = () => {
        setSourceValue(destinationValue);
        setDestinationValue(sourceValue);
        setSourceCurrency(destinationCurrency);
        setDestinationCurrency(sourceCurrency);
    };

    return (
        <div className="min-h-screen bg-[url('/images/Currency.jpg')] bg-cover bg-center justify-center items-center flex">
            <main className="h-80 w-md rounded-md  bg-white/50 border-1 flex flex-col p-5">
                <section className="relative grow-1 flex flex-col gap-3">
                    <CurrencySelector
                        type={"sourceCurrency"}
                        selectedCurrency={sourceCurrency}
                        setSelectedCurrency={setSourceCurrency}
                        value={sourceValue}
                        setValue={setSourceValue}
                    />
                    <button
                        className="absolute top-1/2 left-1/2 bg-blue-600 -translate-1/2 p-1 rounded-md border-2"
                        onClick={handleSwap}
                    >
                        swap
                    </button>
                    <CurrencySelector
                        type={"destinationCurrency"}
                        selectedCurrency={destinationCurrency}
                        setSelectedCurrency={setDestinationCurrency}
                        value={destinationValue}
                        setValue={setDestinationValue}
                    />
                </section>
                <button
                    className="p-2 rounded-md bg-blue-600 mt-5"
                    onClick={handleConvert}
                >
                    Convert {sourceCurrency} to {destinationCurrency}{" "}
                </button>
            </main>
        </div>
    );
}
