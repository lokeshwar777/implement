import React, { useEffect, useState } from "react";
import { getCurrenciesList } from "./CurrencyInfo";

export default function CurrencySelector({
    type,
    selectedCurrency,
    setSelectedCurrency,
    value = 0,
    setValue = null,
}) {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        const fetchCurrencies = async () => {
            const currenciesList = await getCurrenciesList();
            setCurrencies(currenciesList);
        };
        fetchCurrencies();
    }, []);

    return (
        <div className="grow-1 bg-white rounded-xl text-black p-3">
            <div className="flex justify-between text-md text-neutral-500 mb-5">
                <p>{type}</p>
                <p>Currency Type</p>
            </div>
            <div className="flex justify-between text-md">
                {type === "sourceCurrency" ? (
                    <>
                        <label htmlFor="sourceValue" className="hidden"></label>
                        <input
                            id="sourceValue"
                            type="number"
                            className="w-40 p-1"
                            value={value}
                            onChange={(e) =>
                                setValue(
                                    e.target.value < 0 ? 0 : e.target.value
                                )
                            }
                        />
                    </>
                ) : (
                    <p>{Math.round((value * 100) / 100)}</p>
                )}
                <label htmlFor="currencies" className="hidden"></label>
                <select
                    name="currencies"
                    id="currencies"
                    className="w-15"
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                >
                    {currencies?.map((currency, index) => (
                        <option key={index} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
