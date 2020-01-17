import {combineReducers} from 'redux'
import testReducer from '../features/testarea/testReducer'
import projectsReducer from '../features/dashboard/projectsReducer';

const rootReducer = combineReducers({
	test: testReducer,
	projects: projectsReducer
})

export default rootReducer;