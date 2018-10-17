import { RECEIVE_REVIEW_ERRORS, RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW } from '../actions/reviews_actions';

const ReviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case RECEIVE_REVIEW:
      return [];
    case RECEIVE_ALL_REVIEWS:
      return [];
    default:
      return state;
  }
}

export default ReviewErrorsReducer;
