import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW} from '../actions/reviews_actions';
import { RECEIVE_BOAT } from '../actions/boat_actions';
import merge from 'lodash/merge';


const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review});
    case RECEIVE_BOAT:
      return action.payload.reviews;
    default:
      return state;
  }
}

export default ReviewsReducer;
