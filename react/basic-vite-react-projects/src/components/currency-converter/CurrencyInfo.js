const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";

const apikey = import.meta.env.VITE_CURRENCY_API_KEY;
const URL = `${BASE_URL}?apikey=${apikey}`;

const getLatestCurrencyMultiplier = async (
    sourceCurrency,
    destinationCurrency
) => {
    const response = await fetch(`${URL}&base_currency=${sourceCurrency}`);
    const data = await response.json();
    const values = data.data;
    return values[destinationCurrency];
};

let currenciesList;

const getCurrenciesList = async () => {
    if (!currenciesList || !currenciesList.length) {
        const response = await fetch(URL, { apikey });
        const data = await response.json();
        currenciesList = Object.keys(data.data);
        // console.log("currenciesList", currenciesList)
    }
    return currenciesList;
};

export { getCurrenciesList, getLatestCurrencyMultiplier };
