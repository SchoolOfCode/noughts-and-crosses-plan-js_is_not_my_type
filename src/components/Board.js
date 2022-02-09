import React, { useState } from "react";
import Square from "./Square";

const initialSquaresState = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
const Board = () => {
  const [square, setSquare] = useState(initialSquaresState);

  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Square squareState={square} handleClick={handleClick} />
        | <Square squareState={square} handleClick={handleClick} /> |{" "}
        <Square squareState={square} handleClick={handleClick} />{" "}
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <Square squareState={square} handleClick={handleClick} />|{" "}
        <Square squareState={square} handleClick={handleClick} />|{" "}
        <Square squareState={square} handleClick={handleClick} />
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <Square squareState={square} handleClick={handleClick} /> |{" "}
        <Square squareState={square} handleClick={handleClick} />|{" "}
        <Square squareState={square} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Board;
