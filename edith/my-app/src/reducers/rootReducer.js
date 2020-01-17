import {combineReducers} from 'redux'
import testReducer from '../features/testarea/testReducer'
import projectsReducer from '../features/dashboard/projectsReducer';
import tutorialsReducer from '../features/tutorials/tutorialsReducer';

const rootReducer = combineReducers({
	test: testReducer,
	projects: projectsReducer,
	tutorials: tutorialsReducer
})

export default rootReducer;