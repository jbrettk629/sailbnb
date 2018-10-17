import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import BoatErrorsReducer from './boat_errors_reducer';
import BookingErrorsReducer from './booking_errors_reducer';
import ReviewsErrorsReducer from './reviews_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  boat: BoatErrorsReducer,
  booking: BookingErrorsReducer,
  reviews: ReviewsErrorsReducer,
});

export default ErrorsReducer;
