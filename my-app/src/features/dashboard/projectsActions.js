import { CREATE_PROJECT } from "./projectsConstants";

export const createProject = project => {
  return {
    type: CREATE_PROJECT,
    payload: { project }
  };
};
