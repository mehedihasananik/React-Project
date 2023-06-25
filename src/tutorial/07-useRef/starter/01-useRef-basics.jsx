import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMount = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
  };

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log(isMount.current);
  }, [value]);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            ref={refContainer}
            type="text"
            id="name"
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
