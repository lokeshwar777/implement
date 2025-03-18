import ItemList from "./ItemList";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

export default function Content({
  search,
  setSearch,
  items,
  newItem,
  setNewItem,
  handleCheck,
  handleDelete,
  handleCreate,
}) {
  return (
    <>
      <AddItem
        handleCreate={handleCreate}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <ItemList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </>
  );
}
