import { CREATE_PROJECT, UPDATE_EVENT, DELETE_EVENT } from "./projectsConstants";

export const createProject = project => {
  return {
    type: CREATE_PROJECT,
    payload: { project }
  };
};

export const updateEvent = event => {
  return {
    type: UPDATE_EVENT,
    payload: { event }
  };
};

export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENT,
    payload: { eventId }
  };
};
