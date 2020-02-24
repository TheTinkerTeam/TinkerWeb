import axios from "axios";

import * as types from "src/actions/types";

export const createProject = project => {
  return {
    type: types.CREATE_PROJECT,
    payload: { project }
  };
};

export const getProjects = () => async dispatch => {
  try {
    const res = await axios.get("/api/v1/projects");
    dispatch({
      type: types.GET_PROJECTS,
      payload: res.data
    });
  } catch (err) {}
};
