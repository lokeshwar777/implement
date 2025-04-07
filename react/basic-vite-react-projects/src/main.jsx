import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout.jsx";
import About from "./components/pages/About.jsx";
import Connect from "./components/pages/Connect.jsx";
import Github from "./components/pages/Github.jsx";
import Home from "./components/pages/Home.jsx";
import PageNotFound from "./components/pages/PageNotFound.jsx";
import Projects from "./components/Projects.jsx";
import ThemeProvider from "./contexts/ThemeProvider.jsx";
import TodoProvider from "./contexts/TodoProvider.jsx";
import BackgroundColorChanger from "./projects/bg-color-changer/BackgroundColorChanger.jsx";
import CurrencyConverter from "./projects/currency-converter/CurrencyConverter.jsx";
import RandomPasswordGenerator from "./projects/password-generator/RandomPasswordGenerator.jsx";
import TodoApp from "./projects/todo-app";

const projects = [
    {
        route: "background-color-changer",
        component: <BackgroundColorChanger />,
    },
    {
        route: "random-password-generator",
        component: <RandomPasswordGenerator />,
    },
    {
        route: "currency-converter",
        component: <CurrencyConverter />,
    },
    {
        route: "todo-app",
        component: <TodoApp />,
    },
];

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects">
                            <Route index element={<Projects />} />
                            {projects.map(({ route, component }, index) => (
                                <Route
                                    key={index}
                                    path={route}
                                    element={
                                        route === "todo-app" ? (
                                            <TodoProvider>
                                                <TodoApp />
                                            </TodoProvider>
                                        ) : (
                                            component
                                        )
                                    }
                                />
                            ))}
                        </Route>
                        <Route path="github/:user_id?" element={<Github />} />
                        <Route path="connect" element={<Connect />} />
                        <Route path="*" element={<PageNotFound />} />
                        {/* Auth routes */}
                        {/* <Route path="signup" element={<Signup />} />
                    <Route path="login" element={<Login />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
);
