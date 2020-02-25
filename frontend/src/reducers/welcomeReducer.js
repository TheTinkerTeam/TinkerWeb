import * as types from "src/actions/types";

const initialState = [];

const welcomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_WELCOME:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default welcomeReducer;