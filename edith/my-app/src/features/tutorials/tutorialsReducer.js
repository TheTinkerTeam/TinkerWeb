import { createReducer } from "../../common/util/reducerUtils";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./tutorialsConstants";

const initialState = [
  {
    id: "1",
    title: "Intro to 3D Printing",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Intro to 3d Printing' tuto",
    tags: ["3D printer"]
  },
  {
    id: "2",
    title: "How to use a hand saw",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'How to use a hand saw' tuto",
    tags: ["Wood-working", "Tools"],
  },
  {
    id: "3",
    title: "How to use Scratch",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'How to use Scratch' tuto",
    tags: ["Coding"],
  },
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
	[DELETE_EVENT]: deleteEvent,
})