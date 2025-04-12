import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Layout from "./Layout.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ThemeProvider from "./contexts/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>,
);
