import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import BoatsReducer from './boats_reducer';
import BookingsReducer from './bookings_reducer';
import ReviewsReducer from './reviews_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  boats: BoatsReducer,
  bookings: BookingsReducer,
  reviews: ReviewsReducer,
});

export default EntitiesReducer;
