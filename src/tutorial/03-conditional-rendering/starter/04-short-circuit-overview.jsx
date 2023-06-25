import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("susan");

  return (
    <>
      <h4>Falsy or {text || "Hello Anik"}</h4>
      <h4>Falsy and {text && "Hello Anik"}</h4>
      <h4>Truthy or {name || "helo shakib"}</h4>
      <h4>Truthy and {name && "helo rf"}</h4>
    </>
  );
};

export default ShortCircuitOverview;
