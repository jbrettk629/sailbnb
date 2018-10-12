import { RECEIVE_ALL_BOATS, RECEIVE_BOAT } from '../actions/boat_actions';
import merge from 'lodash/merge';

const BoatReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_BOATS:
      return action.boats;
    case RECEIVE_BOAT:
      return merge({}, state, {[action.boat.id]: action.boat});
    default:
      return state;
  }
};

export default BoatReducer;
