import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import * as BoatAction from './actions/boat_actions';
import * as BoatApiUtil from './util/boats_api_util';
import * as BookingsApiUtil from './util/bookings_api_util';
import * as BookingsActions from './actions/booking_actions';
import * as ReviewsApiUtil from './util/reviews_api_util';
import * as ReviewsActions from './actions/reviews_actions';



document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.fetchBoatsUtil = BoatApiUtil.fetchBoats;

  window.fetchBoat = BoatAction.fetchBoat;
  window.fetchBoats = BoatAction.fetchBoats;

  window.fetchBookingsUtil = BookingsApiUtil.fetchBookings;
  window.fetchBookingUtil = BookingsApiUtil.fetchBooking;
  window.createBookingUtil = BookingsApiUtil.createBooking;

  window.fetchBookings = BookingsActions.fetchBookings;
  window.fetchUsersBookings = BookingsActions.fetchUsersBookings;
  window.fetchBooking = BookingsActions.fetchBooking;
  window.createBooking = BookingsActions.createBooking;

  window.fetchReviewsUtil = ReviewsApiUtil.fetchReviews;
  window.fetchReviewUtil = ReviewsApiUtil.fetchReview;
  window.createReviewUtil = ReviewsApiUtil.createReview;

  window.fetchReviews = ReviewsActions.fetchReviews;
  window.fetchReview = ReviewsActions.fetchReview;
  window.createReview = ReviewsActions.createReview;



  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});

//
// <h1>Its Working!</h1>
// const store = configureStore();
//
// window.login = login;
