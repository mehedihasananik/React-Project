import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsloading(false);
    }, 2000);
  }, []);

  if (isloading) {
    return <h3>Loadin..</h3>;
  }

  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
