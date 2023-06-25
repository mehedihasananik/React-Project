import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const onHandleChange = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };
  const onHandleFramework = (e) => {
    setFramework(e.target.value);
  };
  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            checked={shipping}
            onChange={onHandleChange}
            name=""
            id=""
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            value={framework}
            onChange={onHandleFramework}
            name="React"
            id=""
          >
            {frameworks.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
