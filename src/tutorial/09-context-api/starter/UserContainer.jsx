import { useContext } from "react";
import { NavContest } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useContext(NavContest);

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
