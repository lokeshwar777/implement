import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import App from "./App.jsx";
import About from "./components/outlet/About.jsx";
import Home from "./components/outlet/Home.jsx";
import Missing from "./components/outlet/Missing.jsx";
import NewPost from "./components/outlet/NewPost.jsx";
import PostsPage from "./components/outlet/PostsPage.jsx";

export default function Layout() {
  const mockPosts = [
    {
      id: 1,
      title: "One",
      datetime: "2024-03-18T10:00:00Z",
      body: "This is the first post.",
    },
    {
      id: 2,
      title: "Two",
      datetime: "2024-03-18T12:30:00Z",
      body: "This is the second post with more details.",
    },
    {
      id: 3,
      title: "Three",
      datetime: "2024-03-18T15:45:00Z",
      body: "This is the third post, exploring a new topic.",
    },
    {
      id: 4,
      title: "Four",
      datetime: "2024-03-18T18:20:00Z",
      body: "This is the fourth post with insights and thoughts.",
    },
  ];

  const [posts, setPosts] = useState(mockPosts || []);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase()),
    );
    setSearchResults(filteredPosts.reverse());
  }, [search, posts]);

  const handleCreate = (e) => {
    e.preventDefault();
    const newPost = {
      id: (posts?.length && Number(posts[posts.length - 1].id)) + 1,
      title,
      datetime: format(new Date(), "MMMM dd,yyyy pp"),
      body,
    };
    console.log("newPost", newPost);
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
    navigate("/");
  };

  const handleDelete = (id) => {
    const filteredPosts = posts.filter((post) => post.id !== id);
    setPosts(filteredPosts);
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center dark:bg-black dark:text-white">
        <Routes>
          <Route
            path="/"
            element={<App search={search} setSearch={setSearch} />}
          >
            <Route index element={<Home posts={searchResults} />} />
            <Route path="posts">
              <Route
                index
                element={
                  <NewPost
                    title={title}
                    setTitle={setTitle}
                    body={body}
                    setBody={setBody}
                    handleCreate={handleCreate}
                  />
                }
              />
              <Route
                path=":id"
                element={
                  <PostsPage posts={posts} handleDelete={handleDelete} />
                }
              />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
