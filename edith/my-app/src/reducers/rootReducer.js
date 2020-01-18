import {combineReducers} from 'redux'
import testReducer from '../features/testarea/testReducer'
import projectsReducer from '../features/dashboard/projectsReducer';
import tutorialsReducer from '../features/tutorials/tutorialsReducer';
import projectsCategoryReducer from '../features/projects/projectsCategoryReducer';

const rootReducer = combineReducers({
	test: testReducer,
	projects: projectsReducer,
	tutorials: tutorialsReducer,
	projectsCategory: projectsCategoryReducer
})

export default rootReducer;