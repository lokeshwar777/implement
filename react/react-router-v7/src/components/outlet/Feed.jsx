import { useContext } from "react";
import DataContext from "../../context/DataContext";
import Post from "./Post";

export default function Feed() {
  const { posts } = useContext(DataContext);
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
