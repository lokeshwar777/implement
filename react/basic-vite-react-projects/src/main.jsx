import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import BackgroundColorChanger from "./components/bg-color-changer/BackgroundColorChanger.jsx";
import CurrencyConverter from "./components/currency-converter/CurrencyConverter.jsx";
import RandomPasswordGenerator from "./components/password-generator/RandomPasswordGenerator.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />}></Route>
                <Route
                    path="/background-color-changer"
                    element={<BackgroundColorChanger />}
                ></Route>
                <Route
                    path="/random-password-generator"
                    element={<RandomPasswordGenerator />}
                ></Route>
                <Route
                    path="/currency-converter"
                    element={<CurrencyConverter />}
                ></Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
