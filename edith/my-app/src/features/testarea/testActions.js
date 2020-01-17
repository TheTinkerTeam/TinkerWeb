import { INCREMENT_COUNTER, DECREMENT_COUNTER} from "./testConstants";

// This is an action:
// Just a JS object with at least a type prop, and then a payload if needed)
// { type: INCREMENT_COUNTER }
// Then we need to wrap the action in an action creator

// Action creators return actions
export const incrementCounter = () => {
  return { type: INCREMENT_COUNTER };
};

export const decrementCounter = () => {
  return { type: DECREMENT_COUNTER };
};
