import * as types from "src/actions/types"

export const createEvent = event => {
  return {
    type: types.CREATE_EVENT,
    payload: { event }
  };
};

export const updateEvent = event => {
  return {
    type: types.UPDATE_EVENT,
    payload: { event }
  };
};

export const deleteEvent = eventId => {
  return {
    type: types.DELETE_EVENT,
    payload: { eventId }
  };
};
