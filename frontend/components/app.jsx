import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';

const App = () => (
  <div className="general-body">
    <header>
      <GreetingContainer/>
    </header>
    <Protected exact path='/' component={Splash}
    <AuthRoute exact path='/signup' component={SignUpFormContainer}/>
    <AuthRoute exact path='/login' component={LoginFormContainer} />
  </div>
);

export default App;
