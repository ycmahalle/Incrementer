const InitialState = 0;

const changeNumber = (state = InitialState, action) => {
  switch (action.type) {
    case "Increment":
      return state + action.param;
    case "Decrement":
      return state - action.param;
    default:
      return state;
  }
};

export default changeNumber;
