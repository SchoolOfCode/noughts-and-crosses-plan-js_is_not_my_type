import React from "react";

const Square = ({ squareState, handleClick, value }) => {
  return (
    <div>
      <button onClick={handleClick} value={value}>
        X
      </button>
    </div>
  );
};

export default Square;
