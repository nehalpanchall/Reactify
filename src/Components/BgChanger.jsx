import { useState } from "react";

const BgChanger = ({ rootElement } = props) => {
  let [color, setColor] = useState("black");

  let body = rootElement.parentElement;
  body.style.backgroundColor = color;

  return (
    <>
      <div className="m-4 bg-slate-300 rounded-md ">
        <button
          onClick={() => {
            setColor("black");
          }}
          className="m-3"
          style={{ backgroundColor: "black", color: "white" }}
        >
          Black
        </button>
        <button
          onClick={() => {
            setColor("white");
          }}
          className="m-3"
        >
          White
        </button>
        <button
          onClick={() => {
            setColor("red");
          }}
          className="m-3"
          style={{ backgroundColor: "red", color: "white" }}
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
          className="m-3"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("yellow");
          }}
          className="m-3"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
          className="m-3"
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Blue
        </button>
      </div>
    </>
  );
};

export default BgChanger;
