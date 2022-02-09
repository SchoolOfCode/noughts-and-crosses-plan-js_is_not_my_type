import "./App.css";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [inProgress, setInProgress] = useState(false);
  // const handleClick = () => {
  //   // validate click
  // };
  return (
    <div>
      <Board player1Turn={player1Turn} inProgress={inProgress} />
    </div>
  );
}

export default App;
