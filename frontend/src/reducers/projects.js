import * as types from "src/actions/types";

const initialState = [];

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_PROJECT:
      return [...state, action.payload.project]
    case types.CREATE_PROJECT_CATEGORY:
      return [...state, action.payload];
    default:
      return state
  }
}

export default projectReducer;