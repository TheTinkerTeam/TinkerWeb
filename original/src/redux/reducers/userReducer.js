import { combineReducers } from 'redux';

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

const userType = (state = null, action) => {
  console.log(action.user);
  
  switch (action.type) {
    case 'SET_USER':
      return action.user.user_type;
    case 'UNSET_USER':
      return null;
    default:
      return state;
  }
};



export default combineReducers({
  id,
  userName,
  userType,
});
