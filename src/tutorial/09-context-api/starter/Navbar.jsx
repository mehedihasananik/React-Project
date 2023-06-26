import { useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  return <></>;
};

export default Navbar;
