export const GameBoard = ({
  intialGameBoard,
  setIntialgameBoard,
  currentChoice,
  setCurrentChoice,
}) => {
  const handleSqureClick = ({ palyerSymbol, rowIndex, colIndex }) => {
    if (!palyerSymbol) {
      const TempBoard = intialGameBoard?.map((row, rIndex) => {
        if (rIndex === rowIndex) {
          const tempColArr = row?.map((colItem, cIndex) => {
            if (colIndex === cIndex) {
              return currentChoice;
            }
            return colItem;
          });
          return tempColArr;
        }
        return row;
      });
      setIntialgameBoard(TempBoard);
      setCurrentChoice((prev) => (prev === "X" ? "O" : "X"));
    }
  };
  return (
    <>
      <ol id="game-board">
        {intialGameBoard?.map((rowItem, rowIndex) => {
          return (
            <li key={rowIndex}>
              <ol>
                {rowItem?.map((palyerSymbol, colIndex) => {
                  return (
                    <button
                      onClick={() =>
                        handleSqureClick({ palyerSymbol, rowIndex, colIndex })
                      }
                      key={colIndex}
                    >
                      {palyerSymbol}
                    </button>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ol>
    </>
  );
};
