export const GameOver = ({ isGameOver, Winner, ClearOut }) => {
  return (
    <>
      {isGameOver && (
        <div id="game-over">
          <p>Game Over!</p>
          <p style={{ marginTop: "-20px" }}>Winner: {Winner}</p>
          <button onClick={ClearOut}>Play Again!</button>
        </div>
      )}
    </>
  );
};
