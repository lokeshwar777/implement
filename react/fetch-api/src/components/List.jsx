import React from "react";
import ListItem from "./ListItem.jsx";
import Table from "./Table";

export default function List({ items }) {
  return (
    <>
      {/* <ul className="grow list-disc py-5 px-10">
                {items.length ? (
                    items.map((item) => <ListItem item={item} />)
                ) : (
                    <p>No Data Available</p>
                )}
            </ul> */}
      <ul className="overflow-autoe grow list-disc px-10 py-5">
        {items.length ? (
          <Table items={items} />
        ) : (
          // TODO : display this in the center
          <p>No Data Available</p>
        )}
      </ul>
    </>
  );
}
