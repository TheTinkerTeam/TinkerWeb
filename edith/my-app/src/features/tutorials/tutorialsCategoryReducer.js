import { createReducer } from "../../common/util/reducerUtils";
import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
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
