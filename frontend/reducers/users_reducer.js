import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.current_user.id]: action.current_user});
    default:
      return state;
  }
};

export default UsersReducer;
