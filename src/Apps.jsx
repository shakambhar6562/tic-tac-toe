import { useState, useEffect } from "react";
import Player from "./components/Player";
import { GameBoard } from "./components/gameBoard.jsx";
import { GameOver } from "./components/GameOver";
import { RowColDiagonalCheck } from "./Utils/RowColDiagonalCheck";
import "./index.css";
import gameLogo from "/game-logo.png";
import { IsAllMarked } from "./Utils/isAllMarked";
import { IoIosRefresh } from "react-icons/io";
function App() {
  const [intialGameBoard, setIntialgameBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [currentChoice, setCurrentChoice] = useState("X");
  const [isGameOver, setisGameover] = useState({ gameOver: false, winner: "" });
  const [playerDetails, setPlayerDetails] = useState({
    player1: "player 1",
    player2: "player 2",
  });
  const ClearOut = () => {
    setIntialgameBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setCurrentChoice("X");
    setisGameover({ gameOver: false, winner: "" });
  };
  useEffect(() => {
    if (RowColDiagonalCheck("X", intialGameBoard)) {
      setisGameover((prev) => ({
        ...prev,
        gameOver: true,
        winner: playerDetails?.player1,
      }));
    } else if (RowColDiagonalCheck("O", intialGameBoard)) {
      setisGameover((prev) => ({
        ...prev,
        gameOver: true,
        winner: playerDetails?.player2,
      }));
    } else if (IsAllMarked(intialGameBoard)) {
      setisGameover((prev) => ({
        ...prev,
        gameOver: true,
        winner: "No Winner",
      }));
    }
  }, [intialGameBoard]);
  const gameBoardProps = {
    currentChoice,
    setCurrentChoice,
    intialGameBoard,
    setIntialgameBoard,
  };
  const player1 = {
    playerName: playerDetails?.player1,
    playerSymbol: "X",
    buttonName: "Edit",
    isFocused: currentChoice === "X",
    setPlayerDetails,
  };
  const player2 = {
    playerName: playerDetails?.player2,
    playerSymbol: "O",
    buttonName: "Edit",
    isFocused: currentChoice === "O",
    setPlayerDetails,
  };
  const GameOverProps = {
    isGameOver: isGameOver.gameOver,
    Winner: isGameOver.winner,
    ClearOut,
  };
  return (
    <>
      <h1>TIC TAC TOE</h1>
      <header>
        <img src={gameLogo} alt="tictacLogogo" />
      </header>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player {...player1} />
            <Player {...player2} />
            <button onClick={ClearOut}>
              <IoIosRefresh style={{ width: "20px", height: "20px" }} />
            </button>
          </ol>
          <GameBoard {...gameBoardProps} />
          <GameOver {...GameOverProps} />
        </div>
      </main>
    </>
  );
}

export default App;
