import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import { apiRequest } from "../apiRequest.js";

export default function Layout() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoding] = useState(true);

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Didn't get data as expected!");
      const listItems = await response.json();
      setItems(listItems);
      setFetchError(null);
    } catch (error) {
      console.log(error.stack);
      setFetchError(error.message);
    } finally {
      setIsLoding(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  /* // Readable
  const handleCheck = async (id) => {
    let updatedItem;
    const listItems = items.map((item) => {
      if (item.id !== id) return item;
      updatedItem = { ...item, isCompleted: !item.isCompleted };
      return updatedItem;
    });
    setItems(listItems);
    
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: updatedItem.isCompleted }),
    };
    
    const reqURL = `${API_URL}/${id}`;
    const result = await apiRequest(reqURL, updateOptions);
    if (result) setFetchError(result);
  };
    */
  const handleCheck = async (id) => {
    let isCompleted;
    const listItems = items.map((item) => {
      if (item.id !== id) return item;
      isCompleted = !item.isCompleted;
      return { ...item, isCompleted };
    });
    setItems(listItems);

    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted }),
    };

    const reqURL = `${API_URL}/${id}`;
    const result = await apiRequest(reqURL, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const deleteOptions = { method: "DELETE" };

    const reqURL = `${API_URL}/${id}`;
    const result = await apiRequest(reqURL, deleteOptions);
    if (result) setFetchError(result);
  };

  const addItem = async (item) => {
    let id = 1;
    if (items.length) {
      id = Number(items[items.length - 1].id) + 1; // last element's id+1
    }
    const newListItem = {
      id,
      description: item,
      isCompleted: false,
    };
    const listItems = [...items, newListItem];
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="flex h-96 w-xs flex-col flex-nowrap rounded-lg border-4 border-lime-800">
      <Header title="TODO List" />
      <main className="flex grow flex-col overflow-auto dark:bg-gray-900">
        {isLoading && (
          <p className="grow content-center pt-2 text-center text-2xl text-sky-600">
            Loading items...
          </p>
        )}
        {!isLoading && fetchError && (
          <p className="grow pt-2 text-center text-2xl text-red-600">
            {fetchError}
          </p>
        )}
        {!isLoading && !fetchError && (
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
        )}
      </main>
      <Footer items={items} />
    </div>
  );
}
