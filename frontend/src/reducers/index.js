import { combineReducers } from "redux";

import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import projectReducer from "./projectReducer";
import tutorialReducer from "./tutorialReducer";
import newsReducer from "./newsReducer";
import welcomeReducer from "./welcomeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  alerts: alertReducer,
  projects: projectReducer,
  tutorials: tutorialReducer,
  news: newsReducer,
  welcome: welcomeReducer
});

export default rootReducer;
