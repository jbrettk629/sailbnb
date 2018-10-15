import { combineReducers } from 'redux';
import ErrorsSessionReducer from './session_errors_reducer';
import BoatErrorsReducer from './boat_errors_reducer';
import BookingErrorsReducer from './booking_errors_reducer';

const ErrorsReducer = combineReducers({
  session: ErrorsSessionReducer,
  boat: BoatErrorsReducer,
  booking: BookingErrorsReducer,
});

export default ErrorsReducer;
