import { RECEIVE_ERRORS, RECEIVE_BOAT } from '../actions/boat_actions';
import merge from 'lodash/merge';

const BoatErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOAT:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default BoatErrorsReducer;
