import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import Layout from "./components/Layout.jsx";

function App() {
    return (
        <div className="min-h-screen flex flex-col dark:bg-gray-700">
            <Header />
            <Layout />
            <Footer />
        </div>
    );
}

export default App;
