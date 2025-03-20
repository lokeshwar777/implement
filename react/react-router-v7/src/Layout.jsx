import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import api from "./api/posts";
import App from "./App.jsx";
import About from "./components/outlet/About.jsx";
import EditPost from "./components/outlet/EditPost";
import Home from "./components/outlet/Home.jsx";
import Missing from "./components/outlet/Missing.jsx";
import NewPost from "./components/outlet/NewPost.jsx";
import PostsPage from "./components/outlet/PostsPage.jsx";

export default function Layout() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editBody, setEditBody] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (error) {
        if (error.response) {
          // not in 200 response range
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error : ${error.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase()),
    );
    setSearchResults(filteredPosts.reverse());
  }, [search, posts]);

  const handleCreate = async (e) => {
    e.preventDefault();
    const newPost = {
      id: (posts?.length && Number(posts[posts.length - 1].id)) + 1,
      title,
      datetime: format(new Date(), "MMMM dd,yyyy pp"),
      body,
    };
    try {
      const response = await api.post("/posts", newPost);
      setPosts([...posts, response.data]);
      setTitle("");
      setBody("");
      navigate("/");
    } catch (error) {
      console.log(`Error : ${error.message}`);
    }
  };

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd,yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      const filteredPosts = posts.map((post) =>
        post.id === id ? { ...response.data } : post,
      );
      setPosts(filteredPosts);
      setEditBody("");
      setEditTitle("");
      navigate("/");
    } catch (error) {
      console.log(`Error : ${error} ${error.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const filteredPosts = posts.filter((post) => post.id !== id);
      setPosts(filteredPosts);
      navigate("/");
    } catch (error) {
      console.log(`Error : ${error} ${error.message}`);
    }
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
            <Route
              path="edit/:id"
              element={
                <EditPost
                  posts={posts}
                  editBody={editBody}
                  setEditBody={setEditBody}
                  editTitle={editTitle}
                  setEditTitle={setEditTitle}
                  handleEdit={handleEdit}
                />
              }
            />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
