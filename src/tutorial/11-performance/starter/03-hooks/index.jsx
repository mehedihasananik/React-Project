import { useCallback, useState } from "react";
import { data } from "../../../../data";
import List from "./List";
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const removeItem = useCallback(
    (id) => {
      const updatePeople = people.filter((person) => person.id !== id);
      setPeople(updatePeople);
    },
    [people]
  );

  return (
    <section className="mt-5">
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <List people={people} removeItem={removeItem} />
    </section>
  );
};
export default LowerState;
