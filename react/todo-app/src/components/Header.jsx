import React from "react";

export default function Header({ title = "Default Title" }) {
  return (
    <>
      <header className="place-items-center rounded-t-sm p-2 text-3xl dark:bg-amber-900 dark:text-yellow-500">
        <h1>{title}</h1>
      </header>
    </>
  );
}
