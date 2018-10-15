import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import * as BoatAction from './actions/boat_actions';
import * as BoatApiUtil from './util/boats_api_util';
import * as BookingsApiUtil from './util/bookings_api_util';



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

  window.fetchBoat = BoatAction.fetchBoat;
  window.fetchBoats = BoatAction.fetchBoats;
  window.fetchBoatsUtil = BoatApiUtil.fetchBoats;
  window.fetchBookings = BookingsApiUtil.fetchBookings;
  window.fetchBooking = BookingsApiUtil.fetchBooking;
  window.createBooking = BookingsApiUtil.createBooking;


  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});

//
// <h1>Its Working!</h1>
// const store = configureStore();
//
// window.login = login;
