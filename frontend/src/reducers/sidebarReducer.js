import * as types from "../actions/types";

const initialState = {
  animation: "overlay",
  direction: "left",
  dimmed: false,
  visible: false
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_VISIBILITY:
      return { visible: !state.visible };
    default:
      return state;
  }
};

export default sidebarReducer;
