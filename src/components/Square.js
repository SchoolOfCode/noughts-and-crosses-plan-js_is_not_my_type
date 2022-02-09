const Square = ({ handleClick, value, disabled, player }) => {
  return (
    <div className="buttonContainer">
      <button
        className="squareButton"
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
