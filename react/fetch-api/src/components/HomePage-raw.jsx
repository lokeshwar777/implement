import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [resource, setResource] = useState("users");
  const [content, setContent] = useState([]);

  const API_URL = "https://jsonplaceholder.typicode.com";

  const fetchData = async (setData) => {
    const response = await fetch(`${API_URL}/${resource}`);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData(setContent);
  }, [resource]);

  return (
    <div className="flex flex-col dark:bg-slate-800 dark:text-slate-400">
      <header className="flex justify-around">
        <button
          className={`flex-1 dark:border ${
            resource === "users" &&
            "border-2 border-purple-50 dark:bg-amber-400 dark:text-amber-900"
          }`}
          value="users"
          onClick={(e) => setResource(e.target.value)}
        >
          Users
        </button>
        <button
          className={`flex-1 dark:border ${
            resource === "posts" &&
            "border-2 border-purple-50 dark:bg-amber-400 dark:text-amber-900"
          }`}
          value="posts"
          onClick={(e) => setResource(e.target.value)}
        >
          Posts
        </button>
        <button
          className={`flex-1 dark:border ${
            resource === "comments" &&
            "border-2 border-purple-50 dark:bg-amber-400 dark:text-amber-900"
          }`}
          value="comments"
          onClick={(e) => setResource(e.target.value)}
        >
          Comments
        </button>
      </header>
      <section className="grow">
        <ul className="list-disc px-10 py-5">
          {content.length ? (
            content.map((item) => <li key={item.id}>{JSON.stringify(item)}</li>)
          ) : (
            <p>No Data Available</p>
          )}
        </ul>
      </section>
    </div>
  );
}
