import React from "react";

export default function Cell({ cellData }) {
  return (
    <>
      <td className="border">{cellData}</td>
    </>
  );
}
