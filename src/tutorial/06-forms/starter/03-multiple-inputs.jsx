import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onHandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!user.name) return;
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit} className="form">
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={user.name}
            name="name"
            onChange={onHandleChange}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={user.email}
            name="email"
            onChange={onHandleChange}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            value={user.password}
            name="password"
            onChange={onHandleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
