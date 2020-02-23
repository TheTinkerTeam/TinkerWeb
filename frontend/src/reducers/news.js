import * as types from "src/actions/types";

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_NEWS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default newsReducer;