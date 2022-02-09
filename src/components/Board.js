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
      [2, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];

   for (let i = 0; i < comboArr.length; i++) {
      const [a, b, c] = comboArr[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
         return square[a];
      }
      console.log(`this is ${square[a]}`);
      return null;
   }
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
   //  const [winner, setWinner] = useState("");
   const winner = checkWinner(square);
   console.log(`the winner is ${winner}`);

   const handleClick = (e) => {
      let newSquare = [...square];
      newSquare[e.target.value] = playerTurnToggle ? "X" : "O";
      setSquare(newSquare);
      setPlayerTurnToggle(!playerTurnToggle);
      // setWinner(checkWinner(square));
      // console.log(`click value: ${e.target.value} and square: ${square}`);
   };
   //   console.log(playerTurnToggle);
   console.log(square);
   return (
      <div>
         <div style={{ display: "flex" }}>
            <Square
               squareState={square}
               handleClick={handleClick}
               value={0}
               disabled={square[0] !== null ? true : false}
               player={square[0]}
            />
            |{" "}
            <Square
               squareState={square}
               handleClick={handleClick}
               value={1}
               disabled={square[1] !== null ? true : false}
               player={square[1]}
            />{" "}
            |{" "}
            <Square
               squareState={square}
               handleClick={handleClick}
               value={2}
               disabled={square[2] !== null ? true : false}
               player={square[2]}
            />{" "}
         </div>
         <br />
         <div style={{ display: "flex" }}>
            <Square
               squareState={square}
               handleClick={handleClick}
               value={3}
               disabled={square[3] !== null ? true : false}
               player={square[3]}
            />
            |{" "}
            <Square
               squareState={square}
               handleClick={handleClick}
               value={4}
               disabled={square[4] !== null ? true : false}
               player={square[4]}
            />
            |{" "}
            <Square
               squareState={square}
               handleClick={handleClick}
               value={5}
               disabled={square[5] !== null ? true : false}
               player={square[5]}
            />
         </div>
         <br />
         <div style={{ display: "flex" }}>
            <Square
               squareState={square}
               handleClick={handleClick}
               value={6}
               disabled={square[6] !== null ? true : false}
               player={square[6]}
            />{" "}
            |{" "}
            <Square
               squareState={square}
               handleClick={handleClick}
               value={7}
               disabled={square[7] !== null ? true : false}
               player={square[7]}
            />
            |{" "}
            <Square
               squareState={square}
               handleClick={handleClick}
               value={8}
               disabled={square[8] !== null ? true : false}
               player={square[8]}
            />
         </div>
      </div>
   );
};

export default Board;
