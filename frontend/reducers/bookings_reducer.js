import { RECEIVE_BOOKINGS, RECEIVE_BOOKING } from '../actions/booking_actions';
import merge from 'lodash/merge';

const BookingsReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return merge({}, state, {[action.booking.id]: action.booking});
    default:
      return state;
  }
}

export default BookingsReducer;
