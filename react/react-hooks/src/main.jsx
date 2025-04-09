import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import MemoiseFunction from "./hooks/use-callback.jsx";
import AsynchronousRepaint from "./hooks/use-effect.jsx";
import ModalRendering from "./hooks/use-imperative-handle.jsx";
import SynchronousRepaint from "./hooks/use-layout-effect.jsx";
import MemoiseValue from "./hooks/use-memo.jsx";
import SimpleStateManagement from "./hooks/use-context.jsx";
import ComplexStateManagement from "./hooks/use-reducer.jsx";
import StopWatch from "./hooks/use-ref.jsx";
import Counter from "./hooks/use-state.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/use-state" element={<Counter />} />
            <Route path="/use-callback" element={<MemoiseFunction />} />
            <Route path="/use-memo" element={<MemoiseValue />} />
            <Route path="/use-ref" element={<StopWatch />} />
            <Route path="/use-context" element={<SimpleStateManagement />} />
            <Route path="/use-reducer" element={<ComplexStateManagement />} />
            <Route path="/use-effect" element={<AsynchronousRepaint />} />
            <Route path="/use-layout-effect" element={<SynchronousRepaint />} />
            <Route path="/use-imperative-handle" element={<ModalRendering />} />
        </Routes>
    </BrowserRouter>,
);
