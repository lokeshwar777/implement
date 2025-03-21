import { Route, Routes } from "react-router";
import App from "./App.jsx";
import About from "./components/outlet/About.jsx";
import EditPost from "./components/outlet/EditPost";
import Home from "./components/outlet/Home.jsx";
import Missing from "./components/outlet/Missing.jsx";
import NewPost from "./components/outlet/NewPost.jsx";
import PostsPage from "./components/outlet/PostsPage.jsx";
import { DataProvider } from "./context/dataContext.jsx";

export default function Layout() {
  return (
    <div className="flex justify-center dark:bg-black dark:text-white">
      <DataProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="posts">
              <Route index element={<NewPost />} />
              <Route path=":id" element={<PostsPage />} />
            </Route>
            <Route path="edit/:id" element={<EditPost />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}
