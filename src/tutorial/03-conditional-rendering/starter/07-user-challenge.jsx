import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "anik" });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <div>
          hello there, {user.name},<button onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          please login, <button onClick={login}>login</button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
