import {combineReducers} from 'redux'

import authReducer from 'src/reducers/auth';
import alertReducer from 'src/reducers/alerts';
import projectReducer from 'src/reducers/projects';
import tutorialReducer from 'src/reducers/tutorials';
import newsReducer from 'src/reducers/news';
import welcomeReducer from 'src/reducers/welcomes';

const rootReducer = combineReducers({
	auth: authReducer,
	alerts: alertReducer,
	projects: projectReducer,
	tutorials: tutorialReducer,
	news: newsReducer,
	welcomes: welcomeReducer
})

export default rootReducer;