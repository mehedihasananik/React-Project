import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <h3>{name || "nik nik"}</h3>
      <h3>
        {/* {!text && (
          <div>
            <h3>whatever</h3>
            <h3>{name}</h3>
          </div>
        )} */}
      </h3>
      {user && <SomeComponent name={user.name} />}
      {user ? <h3>hello user {user.name} </h3> : <h3>no user</h3>}
      <button>{isEditing ? <h3>login</h3> : <h3>signup</h3>}</button>
    </>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h3>whatever</h3>
      <h3>{name}</h3>
    </div>
  );
};

export default ShortCircuitExamples;
