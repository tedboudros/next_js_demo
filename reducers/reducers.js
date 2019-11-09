const initialState = {
  lastUpdate: 1,
  light: "black"
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TICK":
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light
      };
  }
};

export default Reducer;
