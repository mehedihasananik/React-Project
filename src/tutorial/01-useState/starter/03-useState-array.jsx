import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [items, setItems] = useState(data);

  const removeOne = (id) => {
    const removeItem = items.filter((item) => item.id !== id);
    setItems(removeItem);
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <h5>useState array example</h5>
      {items.map((item) => {
        const { id, name } = item;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button onClick={() => removeOne(id)}>Remove</button>
          </div>
        );
      })}
      <button onClick={removeAll}>Clear All</button>
    </>
  );
};

export default UseStateArray;
