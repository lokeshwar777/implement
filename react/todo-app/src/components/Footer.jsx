import React from "react";

export default function Footer({ items }) {
  const today = new Date();

  return (
    <>
      <footer
        className={`place-items-center text-2xl ${items.length ? "dark:bg-red-800" : "dark:bg-green-700"} dark:text-amber-400`}
      >
        <p>
          {items.length === 0
            ? `No tasks`
            : items.length === 1
              ? `${items.length} task`
              : `${items.length} tasks`}
        </p>
      </footer>
    </>
  );
}
