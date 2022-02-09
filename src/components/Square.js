import React, { useState } from "react";

const Square = ({ squareState, handleClick, value, disabled, player }) => {
  // const [symbol, setSymbol] = useState(" ");
  // function changeSymbol() {
  //   if (playerTurnToggle) {
  //     setSymbol("X");
  //   } else {
  //     setSymbol("O");
  //   }
  // }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={disabled ? true : false}
        value={value}
      >
        {player}
      </button>
    </div>
  );
};

export default Square;
