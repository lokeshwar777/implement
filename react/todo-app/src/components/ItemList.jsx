import React from "react";
import LineItem from "./LineItem";

export default function ItemList({ items, handleCheck, handleDelete }) {
  return (
    <>
      <ul className="flex grow flex-col">
        {items?.length ? (
          items.map((item) => (
            <LineItem
              key={item.id}
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
