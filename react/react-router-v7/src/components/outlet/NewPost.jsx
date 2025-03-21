import { useContext } from "react";
import DataContext from "../../context/DataContext";

export default function NewPost() {
  const { title, setTitle, body, setBody, handleCreate } =
    useContext(DataContext);
  // const { width } = useWindowSize(); // understanding custom hook
  return (
    <main>
      <h2>New Post</h2>
      {/* <p>
        {width >= 992
          ? "desktop(>=992)"
          : width >= 768
            ? "tablet(>=768)"
            : "mobile(>=576)"}
      </p> */}
      <form onSubmit={handleCreate}>
        <label htmlFor="title" className="invisible w-0"></label>
        <input
          id="title"
          type="text"
          placeholder="title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body" className="invisible w-0"></label>
        <textarea
          id="body"
          placeholder="body"
          value={body}
          required
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
    </main>
  );
}
