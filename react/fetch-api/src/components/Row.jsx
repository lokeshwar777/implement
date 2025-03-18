import React from "react";
import Cell from "./Cell";

export default function Row({ item }) {
  return (
    <>
      <tr>
        {/* {Object.values(item).map((val) => (
                    <Cell cellValue={JSON.stringify(val)} />
                ))} */}
        {Object.entries(item).map(([key, value]) => (
          <Cell key={key} cellData={JSON.stringify(value)} />
        ))}
      </tr>
    </>
  );
}
