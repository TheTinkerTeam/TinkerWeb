import { CREATE_WELCOME } from "./welcomeConstants";

const initialState = [
  {
    id: "1",
    description: "Try out starter projects"
  },
  {
    id: "2",
    description: "Join a class with your class code"
  },
  {
    id: "3",
    description: "Download the Tinker Cart plans"
  },
  {
    id: "4",
    description: "wow"
  }
];

const welcomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WELCOME:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default welcomeReducer;
