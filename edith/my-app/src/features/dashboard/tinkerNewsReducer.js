import { createReducer } from "../../common/util/reducerUtils";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./tinkerNewsConstants";

const initialState = [
    {
    id: '1',
    title: 'Weekly challenge!',
    description:
      "We're going way way wayyyy back to Prehistory. Make a project about things that lived thousand (or millions) of year ago!",
    },
    {
    id: '2',
    title: '3D printer Tutorial Update',
    description:
      'Have a look at our improved 3D printer tutorial!',
    },
    {
    id: '3',
    title: 'Hello Banana!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    },
    {
    id: '4',
    title: 'Hello Toto!',
    description:
      'Miaourem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
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