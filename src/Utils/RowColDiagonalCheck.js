const RowCheck = (symbol, intialGameBoard) => {
  let i, j;
  for (i = 0; i < intialGameBoard?.length; i++) {
    for (j = 0; j < intialGameBoard[i].length; j++) {
      if (intialGameBoard[i][j] === symbol) {
        continue;
      } else {
        break;
      }
    }
    if (j === intialGameBoard[i].length) {
      return true;
    }
  }
  return false;
};
const ColCheck = (symbol, intialGameBoard) => {
  let i, j;
  for (i = 0; i < intialGameBoard?.length; i++) {
    for (j = 0; j < intialGameBoard[i].length; j++) {
      if (intialGameBoard[j][i] === symbol) {
        continue;
      } else {
        break;
      }
    }
    if (j === intialGameBoard[i].length) {
      return true;
    }
  }
  return false;
};
const DiagonalCheck1 = (symbol, intialGameBoard) => {
  let i, j;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (intialGameBoard[i][j] === symbol && i === j) {
        continue;
      } else if (i === j && intialGameBoard[i][j] !== symbol) {
        return false;
      }
    }
  }
  return true;
};
const DiagonalCheck2 = (symbol, intialGameBoard) => {
  let i, j;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (intialGameBoard[i][j] === symbol && i + j === 2) {
        continue;
      } else if (i + j == 2 && intialGameBoard[i][j] !== symbol) {
        return false;
      }
    }
  }
  return true;
};

export const RowColDiagonalCheck = (symbol, intialGameBoard) => {
  if (
    RowCheck(symbol, intialGameBoard) ||
    ColCheck(symbol, intialGameBoard) ||
    DiagonalCheck1(symbol, intialGameBoard) ||
    DiagonalCheck2(symbol, intialGameBoard)
  ) {
    return true;
  } else {
    return false;
  }
};
