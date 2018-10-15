import { RECEIVE_ERRORS, RECEIVE_BOOKING } from '../actions/booking_actions';

const BookingErrorsReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_BOOKING:
      return [];
    default:
      return state;
  }
}

export default BookingErrorsReducer;
