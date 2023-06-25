import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const submitForm = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const UpdatedUsers = [...users, newUser];
    setUsers(UpdatedUsers);
    setName("");
  };

  const removeItem = (id) => {
    const remove = users.filter((user) => user.id !== id);
    setUsers(remove);
  };

  return (
    <div>
      <form onSubmit={submitForm} className="form">
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-input"
            id="name"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <div className="text-center">
        {users.map((user) => {
          const { name, id } = user;
          return (
            <div key={id}>
              <h3>{name}</h3>
              <button onClick={() => removeItem(id)} className="btn">
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserChallenge;
