import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { createReducer } from "../../common/util/reducerUtils";

const initialState = {
  data: 42
};

const incrementCounter = (state) => {
	return {...state, data: state.data + 1}
}

const decrementCounter = (state) => {
	return {...state, data: state.data - 1}
}

//We pass the state and the actions as arguments to the reducer

// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { ...state, data: state.data + 1 };
//     //because we are using the spread '...' operator, we are returning a new state object
//     case DECREMENT_COUNTER:
//       return { ...state, data: state.data - 1 };
//     default:
//       return state;
//   }
// };

// export default testReducer;

export default createReducer(initialState, {
	[INCREMENT_COUNTER]: incrementCounter,
	[DECREMENT_COUNTER]: decrementCounter,
})
