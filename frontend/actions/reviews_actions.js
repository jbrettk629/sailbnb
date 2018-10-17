import * as ReviewsApiUtil from '../util/reviews_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
})

const receiveReview = (payload) => {
  debugger
  return ({
  type: RECEIVE_REVIEW,
  payload
})
}

const receiveErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
})

export const fetchReviews = (boatId) => dispatch => {
  return (
    ReviewsApiUtil.fetchReviews(boatId).then(
      reviews => dispatch(receiveAllReviews(reviews)),
      errs => dispatch(receiveErrors(errs.responseJSON))
    )
  );
}

export const fetchReview = (boatId, reviewId) => dispatch => {
  return (
    ReviewsApiUtil.fetchReview(boatId, reviewId).then(
      review => dispatch(receiveReview(review)),
      errs => dispatch(receiveErrors(errs.responseJSON))
    )
  );
}


export const createReview = (boatId, review) => dispatch => {
  return (
    ReviewsApiUtil.createReview(boatId, review).then(
      review => dispatch(receiveReview(review)),
      errs => dispatch(receiveErrors(errs.responseJSON))
    )
  );
}
