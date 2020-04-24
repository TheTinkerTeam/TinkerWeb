import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;
  // console.log(state);

  switch (type) {
    case SET_ALERT:
      for (let i = 0; i < state.length; i++) {
        let alert_test = state[i];
        if (payload.msg === alert_test.msg) {
          return [...state.filter(a => a.id !== alert_test.id), payload];
        }
      }
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
