import { useContext } from "react";
import { NavContest, useAppContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useAppContext();

  return (
    <div>
      {user ? (
        <>
          {" "}
          <p>Click here:{user?.name}</p>
          <button onClick={logout} class="nav-item ">
            logout
          </button>
        </>
      ) : (
        <>
          <button>login</button>
        </>
      )}
    </div>
  );
};

export default UserContainer;
