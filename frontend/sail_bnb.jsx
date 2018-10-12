import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import * as BoatAction from './actions/boat_actions';
import * as BoatApiUtil from './util/boats_api_util';



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
  window.fetchBoat = BoatAction.fetchBoat;
  window.fetchBoats = BoatAction.fetchBoats;
  window.createBoat = BoatAction.createBoat;
  window.fetchBoatsUtil = BoatApiUtil.fetchBoats;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});

//
// <h1>Its Working!</h1>
// const store = configureStore();
//
// window.login = login;
