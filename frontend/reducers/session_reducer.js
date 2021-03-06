import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions.js';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({id: null});

const SessionReducer = (state = _nullUser, action) => {
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {id: action.currentUser.id};
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;
