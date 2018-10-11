import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import NavBarContainer from './navbar/navbar_container';
import SplashContainer from './splash/splash_container';

import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';

const App = () => (
  <div className="general-body">
    <Modal />
    <header>
      <NavBarContainer/>
    </header>
    <Route path='/' component={SplashContainer} />

  </div>
);

export default App;

// <Protected exact path='/' component={Splash}>
// <AuthRoute exact path='/signup' component={SignUpFormContainer}/>
// <AuthRoute exact path='/login' component={LoginFormContainer} />
