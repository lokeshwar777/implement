import { useContext } from "react";
import { Link, useParams } from "react-router";
import DataContext from "../../context/DataContext";

export default function PostsPage() {
  const { posts, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  // const post = posts.find((post) => post.id.toString() === id); // or
  const post = posts.find((post) => post.id == id);

  return (
    <main>
      <article>
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button>Edit Post</button>
            </Link>
            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <Link to="/">Go to Home</Link>
          </>
        )}
      </article>
    </main>
  );
}
