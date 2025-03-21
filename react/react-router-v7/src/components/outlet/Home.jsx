import { useContext } from "react";
import DataContext from "../../context/DataContext";
import Feed from "./Feed";

export default function Home() {
  const { isLoading, fetchError, posts } = useContext(DataContext);
  return (
    <>
      <main>
        {isLoading ? (
          <p className="text-blue-700">Loading Posts...</p>
        ) : fetchError ? (
          <p className="text-red-700">{fetchError}</p>
        ) : posts.length ? (
          <Feed />
        ) : (
          <p>No Posts</p>
        )}
      </main>
    </>
  );
}
