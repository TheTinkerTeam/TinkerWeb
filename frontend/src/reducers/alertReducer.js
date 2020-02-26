import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      for (let i = 0; i < state.length; i++) {
        alert = state[i];
        if (payload.msg === alert.msg) {
          return [...state.filter(a => a.id !== alert.id), payload];
        }
      }
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
