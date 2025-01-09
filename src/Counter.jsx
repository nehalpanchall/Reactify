import { useState } from "react";
import "./Counter.css";

let Counter = () => {
  //   let counter = 6;

  let [counter, setCounter] = useState(6);

  let plusOne = () => {
    // counter = counter + 1;
    // console.log(counter);

    // counter should not increase more than 10
    if (counter < 10) setCounter(counter + 1);
    else console.log("you cannot increase more!");
  };

  let minOne = () => {
    // counter = counter - 1;
    // console.log(counter);

    // couter should not decrease less than 0
    if (counter > 0) setCounter(counter - 1);
    else console.log("you cannot decrease more!");
  };

  return (
    <>
      <h1 className="m-5">Counter: {counter} </h1>

      <button
        className="bg-slate-400 m-5 p-2 border-b-2 rounded-lg"
        onClick={plusOne}
      >
        Add +1 {counter}{" "}
      </button>

      <button
        className="bg-slate-400 m-5 p-2 border-b-2 rounded-lg"
        onClick={minOne}
      >
        Delete -1 {counter}
      </button>

      <h2>Footer: {counter}</h2>
    </>
  );
};

export default Counter;
