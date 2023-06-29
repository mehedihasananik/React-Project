import Item from "./Person";
import { memo } from "react";

const List = ({ people, removeItem }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removeItem={removeItem} />;
      })}
    </div>
  );
};
export default memo(List);
