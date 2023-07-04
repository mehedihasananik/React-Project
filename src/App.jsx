import { useState } from "react";
import reviews from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { image, name } = reviews[index];
  // console.log(Math.round(Math.random()) * 1);

  const nextPrev = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const next = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;

      return nextPrev(newIndex);
    });
  };
  const prev = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return nextPrev(newIndex);
    });
  };
  const random = () => {
    let newNumber = Math.floor(Math.random() * reviews.length);
    if (newNumber === index) {
      newNumber = index + 1;
    }
    setIndex(nextPrev(newNumber));
  };

  return (
    <div>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <button onClick={() => prev()}>prev</button>
      <button onClick={() => next()}>next</button>
      <button onClick={() => random()}>random</button>
    </div>
  );
};

export default App;
