import { useState } from "react";
import { people } from "../../../data";
import { SecondList } from "./secondList";

const List = () => {
  const [person, setPerson] = useState(people);

  return (
    <>
      {person.map((list) => {
        return <SecondList key={list.id} {...list} />;
      })}
    </>
  );
};

export default List;
