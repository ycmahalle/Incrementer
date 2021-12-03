export const Increment = (num) => {
  return {
    type: "Increment",
    param: num,
  };
};

export const Decrement = (num) => {
  return { type: "Decrement", param: num };
};
