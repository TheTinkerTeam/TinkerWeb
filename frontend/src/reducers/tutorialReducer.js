import * as types from "../actions/types";

const initialState = [];

const tutorialReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_TUTO:
      return [...state, action.payload];
    case types.CREATE_TUTO_CATEGORY:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default tutorialReducer;
