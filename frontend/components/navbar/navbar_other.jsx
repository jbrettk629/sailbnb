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
          <div className="other-nav-link-item"><button onClick={() => openModal('login')}>Log In</button></div>
          <br/>
          <div className="other-nav-link-item"><button onClick={() => openModal('signup')}>Sign Up</button></div>
        </div>
    </div>
  )

  const signedIn = () => (
    <div className='other-navbar'>
        <div className='logo'>
          <Link to='/'><img id='logo' src='/assets/red_sailboat_logo'/></Link>
        </div>
        <div className="other-nav-links">
          <div className="other-nav-link-item"><h3>Hi, {currentUser.name}</h3></div>
          <div className="other-nav-link-item"><Link to="/bookings">Trips</Link></div>
          <div className="other-nav-link-item"><button onClick={logout}>Logout</button></div>
        </div>
  </div>
  )

  return currentUser ? signedIn() : sessionLinks();
};

export default OtherNavBar;
