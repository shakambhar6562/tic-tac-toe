export const MatchManipulation = (value) => {
  if (value) {
    return value?.toLowerCase().trim();
  }
  return value;
};
