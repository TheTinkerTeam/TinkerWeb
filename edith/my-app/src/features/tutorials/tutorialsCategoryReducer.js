// import { createReducer } from "../../common/util/reducerUtils";
import {
  CREATE_TUTO_CATEGORY
} from "./tutorialsCategoryConstants";

const initialState = [
  {
    id: "1",
    name: "All"
  },
  {
    id: "2",
    name: "3D printing"
  },
  {
    id: "3",
    name: "Wood-working"
  },
  {
    id: "4",
    name: "Laser Cutting"
  },
  {
    id: "5",
    name: "Software"
  },
  {
    id: "6",
    name: "Coding"
  }
];

const tutoCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TUTO_CATEGORY:
      return [...state, action.payload]
    default:
      return state
  }
}

export default tutoCategoryReducer;