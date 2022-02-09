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
function checkWinner(square) {
  const comboArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < comboArr.length; i++) {
    const [a, b, c] = comboArr[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}
// if (
//    comboArr[i]
//       .every((n) => square[n] === "X")
//       .map((bool) => {
//          return bool;
//       })
//       .filter((bool) => (bool ? true : false))
// ) {
//    return "X";
// } else if (comboArr[i].every((n) => square[n] === "O")) {
//    return "O";
// }
const Board = () => {
  const [square, setSquare] = useState(initialSquaresState);
  const [playerTurnToggle, setPlayerTurnToggle] = useState(true);
  //   const [winner, setWinner] = useState("");
  let winner = checkWinner(square);

  const handleClick = (e) => {
    let newSquare = [...square];
    newSquare[e.target.value] = playerTurnToggle ? "X" : "O";
    setSquare(newSquare);
    setPlayerTurnToggle(!playerTurnToggle);
    // setWinner(checkWinner(square));
    // console.log(`click value: ${e.target.value} and square: ${square}`);
  };
  const resetGame = () => {
    winner = null;
    setSquare(initialSquaresState);
  };
  //   console.log(playerTurnToggle);
  console.log(square);
  if (winner) {
    return (
      <div className="winnerWinner">
        {winner} wins!
        <button className="resetButton" onClick={resetGame}>
          reset game
        </button>
      </div>
    );
  } else {
    return (
      <div className="squareContainer">
        {square.map((sq, index) => {
          return (
            <Square
              squareState={square}
              handleClick={handleClick}
              key={index}
              value={index}
              disabled={square[index] !== null ? true : false}
              player={square[index]}
            />
          );
        })}
        {!square.includes(null) && (
          <>
            <div></div>
            <div className="nudgeMe">
              <button className="resetButton" onClick={resetGame}>
                reset game
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
};

export default Board;
