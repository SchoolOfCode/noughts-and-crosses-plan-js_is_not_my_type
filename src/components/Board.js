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

  const handleClick = (e) => {
    let newSquare = [...square];
    newSquare[e.target.value] = "player";
    setSquare(newSquare);
    console.log(`click value: ${e.target.value} and square: ${square}`);
  };
  console.log(square);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Square squareState={square} handleClick={handleClick} value={0} />
        | <Square
          squareState={square}
          handleClick={handleClick}
          value={1}
        /> | <Square squareState={square} handleClick={handleClick} value={2} />{" "}
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <Square squareState={square} handleClick={handleClick} value={3} />|{" "}
        <Square squareState={square} handleClick={handleClick} value={4} />|{" "}
        <Square squareState={square} handleClick={handleClick} value={5} />
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <Square squareState={square} handleClick={handleClick} value={6} /> |{" "}
        <Square squareState={square} handleClick={handleClick} value={7} />|{" "}
        <Square squareState={square} handleClick={handleClick} value={8} />
      </div>
    </div>
  );
};

export default Board;
