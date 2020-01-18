import { createReducer } from "../../common/util/reducerUtils";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./welcomeConstants";

// const initialState = {
//   items: [
//     "Try out starter projects",
//     "Join a class with your class code",
//     "Download the Tinker Cart plans",
//     "wow"
//   ]
// };

const initialState = [
  {
    id: '1',
    description:
      "Try out starter projects",
  },
  {
    id: '2',
    description:
    "Join a class with your class code",
  },
  {
    id: '3',
    description:
    "Download the Tinker Cart plans",
  },
  {
    id: '4',
    description:
      "wow",
  }
];

const createEvent = (state, payload) => {
  return [...state, payload.event];
};

const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    payload.event
  ];
};

const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)];
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
});
