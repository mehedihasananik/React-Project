import { useState } from "react";

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);

  const dropDown = () => {
    setShow(!show);
  };

  return [show, dropDown];
};

export default useToggle;
