import { Link } from "react-router";

export default function Post({ post }) {
  return (
    <article>
      <Link to={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.datetime}</p>
      </Link>
      <p>{post.body}</p>
    </article>
  );
}
