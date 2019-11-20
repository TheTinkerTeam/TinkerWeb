import { combineReducers } from 'redux';
import { USER_ACTIONS } from '../actions/userActions';

const id = (state = null, action) => {
  
  switch (action.type) {
    case 'SET_USER':
      return action.user.id || state;
    case 'UNSET_USER':
      return null;
    default:
      return state;
  }
};

const userName = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user.username || state;
    case 'UNSET_USER':
      return null;
    default:
      return state;
  }
};



export default combineReducers({
  id,
  userName
});
