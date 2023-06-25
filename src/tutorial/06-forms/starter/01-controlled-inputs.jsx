import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <div className="text-center mt-5">
      <h2>Controlled Inputs</h2>
      <form onSubmit={onSubmit} className="form">
        <h4>controlled inputs</h4>
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
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-input"
            id="email"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default ControlledInputs;
