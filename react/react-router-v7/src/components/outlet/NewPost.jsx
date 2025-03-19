export default function NewPost({
  title,
  setTitle,
  body,
  setBody,
  handleCreate,
}) {
  return (
    <main>
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
