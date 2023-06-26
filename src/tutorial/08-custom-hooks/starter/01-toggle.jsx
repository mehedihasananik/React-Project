import { useState } from "react";
import useToggle from "./useToggle";

const ToggleExample = () => {
  const [show, dropDown] = useToggle(false);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={dropDown}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
