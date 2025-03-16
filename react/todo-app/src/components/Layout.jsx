import React, { useState } from "react";
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todoList")),
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("todoList", JSON.stringify(newItems));
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const addItem = (item) => {
    let id = 1;
    if (items.length) {
      id = items[items.length - 1].id + 1; // last element's id+1
    }
    const myNewItem = {
      id,
      description: item,
      isCompleted: false,
    };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="flex h-96 max-w-md min-w-xs flex-col flex-nowrap rounded-lg border-4 border-lime-800">
      <Header title="TODO List" />
      <Content
        items={items.filter((item) =>
          item.description.toLowerCase().includes(search.toLowerCase()),
        )}
        newItem={newItem}
        search={search}
        setSearch={setSearch}
        setNewItem={setNewItem}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleCreate={handleCreate}
      />
      <Footer items={items} />
    </div>
  );
}
