import {combineReducers} from 'redux'
import testReducer from '../features/testarea/testReducer'
import projectsReducer from '../features/dashboard/projectsReducer';
import tutorialsReducer from '../features/tutorials/tutorialsReducer';
import projectsCategoryReducer from '../features/projects/projectsCategoryReducer';
import tutorialsCategoryReducer from '../features/tutorials/tutorialsCategoryReducer';
import tinkerNewsReducer from '../features/dashboard/tinkerNewsReducer';
import welcomeReducer from '../features/dashboard/welcomeReducer';

const rootReducer = combineReducers({
	test: testReducer,
	projects: projectsReducer,
	tutorials: tutorialsReducer,
	projectsCategory: projectsCategoryReducer,
	tutorialsCategory: tutorialsCategoryReducer,
	news: tinkerNewsReducer,
	welcomeItems: welcomeReducer
})

export default rootReducer;