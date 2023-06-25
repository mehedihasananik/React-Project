import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "rakib",
    age: 28,
    hobby: "sleep",
  });

  const displayUser = () => {
    setPerson({ ...person, name: "anik" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.hobby}</h3>
      <button onClick={displayUser}>New User</button>
    </>
  );
};

export default UseStateObject;
