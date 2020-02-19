import { CREATE_CATEGORY } from "./projectsCategoryConstants";

const initialState = [
  {
    id: "1",
    name: "All"
  },
  {
    id: "2",
    name: "Science"
  },
  {
    id: "3",
    name: "Wood-working"
  },
  {
    id: "4",
    name: "Coding"
  },
  {
    id: "5",
    name: "Cooking"
  },
  {
    id: "6",
    name: "Innovation"
  }
];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default categoryReducer;
