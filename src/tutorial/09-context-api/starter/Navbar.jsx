import { createContext, useContext, useState } from "react";
import NavLinks from "./NavLinks";

export const NavContest = createContext();

// custom hooks

export const useAppContext = () => useContext(NavContest);

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };

  return (
    <NavContest.Provider value={{ user, logout }}>
      <nav className=" d-flex justify-content-between ">
        <h3>Context Api</h3>
        <NavLinks user={user} logout={logout} />
      </nav>
    </NavContest.Provider>
  );
};

export default Navbar;
