import React, { useReducer } from "react";
import { data } from "../../../data";

const defaultState = {
  people: data,
};
const reducer = () => {};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  console.log(state.people);

  // const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };
  const resetFunc = () => {
    // setPeople(data);
  };

  return (
    <div className="text-center pt-5">
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <>
          <button onClick={resetFunc}>Reset</button>
        </>
      ) : (
        <>
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={() => setPeople([])}
          >
            clear items
          </button>
        </>
      )}
    </div>
  );
};

export default ReducerBasics;
