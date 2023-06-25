import { useState } from "react";

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandle = () => {
    if (toggle) {
      setToggle(false);
      return;
    }
    setToggle(true);
  };

  return (
    <>
      <button onClick={toggleHandle}>toggle now</button>
      {toggle ? <div>hey anik</div> : null}
    </>
  );
};

export default ToggleChallenge;
