import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router";
import DataContext from "../../context/DataContext";

export default function EditPost() {
  const { posts, editBody, setEditBody, editTitle, setEditTitle, handleEdit } =
    useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main>
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="title" className="invisible w-0"></label>
            <input
              id="title"
              type="text"
              placeholder="title"
              value={editTitle}
              required
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="body" className="invisible w-0"></label>
            <textarea
              id="body"
              placeholder="body"
              value={editBody}
              required
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={() => handleEdit(id)}>
              Edit Post
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <Link to="/">Go to Home</Link>
        </>
      )}
    </main>
  );
}
