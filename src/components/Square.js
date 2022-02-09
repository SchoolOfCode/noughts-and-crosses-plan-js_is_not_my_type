import React from "react";

const Square = ({ squareState, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>X</button>
    </div>
  );
};

export default Square;
