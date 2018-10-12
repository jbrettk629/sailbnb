import { combineReducers } from 'redux';
import ErrorsSessionReducer from './session_errors_reducer';
import BoatErrorsReducer from './boat_errors_reducer';

const ErrorsReducer = combineReducers({
  session: ErrorsSessionReducer,
  boat: BoatErrorsReducer,
});

export default ErrorsReducer;
