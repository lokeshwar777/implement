import React from "react";
import LineItem from "./LineItem";

export default function ItemList({ items, handleCheck, handleDelete }) {
  return (
    <>
      <ul className="flex grow flex-col overflow-auto">
        {items?.length ? (
          items.map((item, key) => (
            <LineItem
              key={key}
              item={item}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <p className="flex grow items-center justify-center text-2xl">
            No Tasks
          </p>
        )}
      </ul>
    </>
  );
}
