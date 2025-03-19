import Feed from "./Feed";

export default function Home({ posts }) {
  return (
    <>
      <main>{posts.length ? <Feed posts={posts} /> : <p>No Posts</p>}</main>
    </>
  );
}
