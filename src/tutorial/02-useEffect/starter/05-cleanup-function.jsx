import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle Now</button>
      {toggle ? <SecondFunction /> : null}
    </div>
  );
};

const SecondFunction = () => {
  useEffect(() => {
    const intID = setInterval(() => {
      console.log("hello from interval");
    }, 1000);
    clearInterval(intID);
  }, []);
  return <div>hey anik</div>;
};

export default CleanupFunction;
