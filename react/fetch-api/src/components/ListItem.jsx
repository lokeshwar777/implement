import React from "react";

export default function ListItem({ item }) {
  return (
    <>
      <li>{JSON.stringify(item)}</li>
    </>
  );
}
