import React, { useReducer } from "react";
import { data } from "../../../data";

const defaultReducer = {
  people: data,
};

const reducer = (state, action) => {
  if (action.type === "COMPLETE") {
    return { ...state, people: [] };
  }
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultReducer);
  console.log(state.people);

  // const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const resetList = () => {
    setPeople(data);
  };

  const clearList = () => {
    dispatch({ type: "COMPLETE" });

    // setPeople([]);
  };
  return (
    <div className="text-center">
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
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
