import React from "react";
import Row from "./Row";

export default function Table({ items }) {
  return (
    <>
      <table>
        <tbody>
          {items.map((item) => (
            <Row key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
}
