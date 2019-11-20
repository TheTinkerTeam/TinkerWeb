import { combineReducers } from 'redux';
import { LOGIN_ACTIONS } from '../actions/loginActions';

const message = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_LOGIN_ERROR':
      return '';
    case 'LOGIN_FAILED':
      return 'Ooops! The username and password didn\'t match. Try again!';
    case 'INPUT_ERROR':
      return action.payload;
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'REQUEST_START':
      return true;
    case 'REQUEST_DONE':
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  isLoading,
  message,
});
