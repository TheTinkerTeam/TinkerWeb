import { combineReducers } from "redux";

import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import projectReducer from "./projectReducer";
import tutorialReducer from "./tutorialReducer";
import newsReducer from "./newsReducer";
import welcomeReducer from "./welcomeReducer";
import sidebarReducer from "./sidebarReducer";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  auth: authReducer,
  alerts: alertReducer,
  projects: projectReducer,
  tutorials: tutorialReducer,
  news: newsReducer,
  welcome: welcomeReducer,
  sidebar: sidebarReducer
});

export default rootReducer;
