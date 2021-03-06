import * as types from "../actions/types";

const initialState = [];

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROJECTS:
      return [...action.payload];

    case types.CREATE_PROJECT:
      return [...state, action.payload];
    case types.CREATE_PROJECT_CATEGORY:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default projectReducer;
