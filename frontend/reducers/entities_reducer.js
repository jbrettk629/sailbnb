import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import BoatsReducer from './boats_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  boats: BoatsReducer,
});

export default EntitiesReducer;
