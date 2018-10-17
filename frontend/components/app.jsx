import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import NavBarContainer from './navbar/navbar_container';
import OtherNavBarContainer from './navbar/other_navbar_container';
import SplashContainer from './splash/splash_container';
import SearchContainer from './search/search_container';
import BoatShowContainer from './boat_show/boat_show_container';
import TripsIndexContainer from './trips/trips_container';
// import BoatsContainer from './boats/boats_container';


const App = () => (
  <div className="general-body">

    <Modal />
    <Route exact path='/' component={NavBarContainer}></Route>
    <Route path='/boats' component={OtherNavBarContainer}></Route>

    <Switch>
      <Route exact path='/boats/:boatId' component={BoatShowContainer} />
      <Route exact path='/boats' component={SearchContainer} />
      <Route exact path='/bookings' component={TripsIndexContainer} />
      <Route exact path='/' component={SplashContainer} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;

// <Protected exact path='/' component={Splash}>
// <AuthRoute exact path='/signup' component={SignUpFormContainer}/>
// <AuthRoute exact path='/login' component={LoginFormContainer} />


// import LoginFormContainer from './session/login_form_container';
// import SignUpFormContainer from './session/signup_form_container';

// <div className="navbar">
//   <NavBarContainer/>
// </div>
