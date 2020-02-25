import * as types from "../actions/types";

const initialState = [];

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_NEWS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default newsReducer;
