import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import BoatsReducer from './boats_reducer';
import BookingsReducer from './bookings_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  boats: BoatsReducer,
  bookings: BookingsReducer,
});

export default EntitiesReducer;
