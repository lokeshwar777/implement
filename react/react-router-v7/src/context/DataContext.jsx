import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../api/posts";
import useAxiosFetch from "../hooks/useAxiosFetch";

import { createContext } from "react";
const DataContext = createContext(null); // null can also be used as a fallback value

export function DataProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editBody, setEditBody] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const navigate = useNavigate();

  const [data, isLoading, fetchError] = useAxiosFetch(
    "http://localhost:3500/posts",
  );

  useEffect(() => {
    setPosts(data || []);
  }, [data]);

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
    <DataContext.Provider
      value={{
        search,
        setSearch,
        posts,
        handleDelete,
        editBody,
        setEditBody,
        editTitle,
        setEditTitle,
        handleEdit,
        isLoading,
        fetchError,
        title,
        setTitle,
        body,
        setBody,
        handleCreate,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
