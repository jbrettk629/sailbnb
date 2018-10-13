import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions /modal_actions';

const OtherNavBar = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div className='other-navbar'>
        <div className='logo'>
          <Link to='/'><img id='logo' src='/assets/red_sailboat_logo'/></Link>
        </div>
        <div className="other-nav-links">
          <button onClick={() => openModal('login')}>Log In</button>
          <br/>
          <button onClick={() => openModal('signup')}>Sign Up</button>
        </div>
    </div>
  )

  const signedIn = () => (
    <div className='other-navbar'>
        <div className='logo'>
          <Link to='/'><img id='logo' src='/assets/red_sailboat_logo'/></Link>
        </div>
        <div className="other-nav-links">
          <h3>Hi, {currentUser.name}</h3>
          <button onClick={logout}>Logout</button>
        </div>
  </div>
  )

  return currentUser ? signedIn() : sessionLinks();
};

export default OtherNavBar;
