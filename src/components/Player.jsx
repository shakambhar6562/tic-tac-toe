import React, { useState, useEffect } from "react";
import "./../index.css";
const Player = (props) => {
  const { playerName = "PLAYER 1", playerSymbol = "X", buttonName = "Edit", isFocused, setPlayerDetails } = props;

  const [playerHandler, setPlayerHandler] = useState({
    playerName,
    isEditClicked: false,
    prevPlayerName: playerName,
  });
  useEffect(() => {
    const keySet = playerSymbol === "X" ? "player1" : "player2";
    setPlayerDetails((prev) => ({
      ...prev,
      [keySet]: playerHandler.playerName,
    }));
  }, [playerHandler]);

  const handleButtonClick = (buttonType) => {
    switch (buttonType) {
      case "edit": {
        setPlayerHandler((prev) => ({ ...prev, isEditClicked: true }));
        break;
      }
      case "save": {
        setPlayerHandler((prev) => ({
          ...prev,
          isEditClicked: false,
          prevPlayerName: prev.playerName,
        }));
        break;
      }
      case "cancel": {
        setPlayerHandler((prev) => ({
          ...prev,
          isEditClicked: false,
          playerName: prev.prevPlayerName,
        }));
        break;
      }
      default: {
        return false;
      }
    }
  };
  const nameRender = playerHandler?.isEditClicked ? (
    <input
      onChange={(event) =>
        setPlayerHandler((prev) => ({
          ...prev,
          playerName: event.target.value,
        }))
      }
      value={playerHandler?.playerName}
    />
  ) : (
    <span className="player-name">{playerHandler?.playerName}</span>
  );
  const buttonRendered = !playerHandler?.isEditClicked ? (
    <button onClick={() => handleButtonClick("edit")}>{buttonName}</button>
  ) : (
    <>
      <button onClick={() => handleButtonClick("save")}>save</button>
      <button onClick={() => handleButtonClick("cancel")}>Cancel</button>
    </>
  );
  return (
    <>
      <div className={isFocused ? "isfocused" : "notFocused"}>
        <div className="player">{nameRender}</div>
        {buttonRendered}
      </div>
      {/* <li className={isFocused ? "isfocused" : ""}>
        <span className="player">
          {nameRender}
          <span className="player-symbol">{playerSymbol}</span>
        </span>
        {buttonRendered}
      </li> */}
    </>
  );
};
export default Player;
