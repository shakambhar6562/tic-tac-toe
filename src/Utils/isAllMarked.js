export const IsAllMarked = (arr) => {
  let isTicFull = true;
  arr.map((row, rowIndex) => {
    row?.map((col, colIndex) => {
      if (!col) {
        isTicFull = false;
      }
    });
  });
  return isTicFull;
};
