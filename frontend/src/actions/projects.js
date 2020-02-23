import * as types from "src/actions/types"

export const createProject = project => {
  return {
    type: types.CREATE_PROJECT,
    payload: { project }
  };
};
