import React, { useState } from "react";

const Square = ({ handleClick, value, disabled, player }) => {
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
