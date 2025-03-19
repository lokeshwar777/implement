import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App({ search, setSearch }) {
  return (
    <>
      <div className="flex min-h-screen max-w-lg grow flex-col rounded-lg border-2">
        <Header />
        <Nav search={search} setSearch={setSearch} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
