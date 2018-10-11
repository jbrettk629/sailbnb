import { combineReducers } from 'redux';
import ErrorsSessionReducer from './session_errors_reducer';

const ErrorsReducer = combineReducers({
  session: ErrorsSessionReducer,
});

export default ErrorsReducer;
