import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions /modal_actions';

const NavBar = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div className='navbar'>
        <div className='logo'>
          <Link to='/'><img id='logo' src='https://s3-us-west-1.amazonaws.com/sailbnb-dev/white_sailboat_logo.png'/></Link>
        </div>
        <div className="nav-links">
          <div className="nav-link-item"><button onClick={() => openModal('login')}>Log In</button></div>
          <br/>
          <div className="nav-link-item"><button onClick={() => openModal('signup')}>Sign Up</button></div>
        </div>
    </div>
  )

  const signedIn = () => (
    <div className='navbar'>
        <div className='logo'>
          <Link to='/'><img id='logo' src='https://s3-us-west-1.amazonaws.com/sailbnb-dev/white_sailboat_logo.png'/></Link>
        </div>
        <div className="nav-links">
          <div className="nav-link-item"><h3>Hi, {currentUser.name}</h3></div>
          <div className="nav-link-item"><Link to="/bookings">Trips</Link></div>
          <div className="nav-link-item"><button onClick={logout}>Logout</button></div>
        </div>
  </div>
  )

  return currentUser ? signedIn() : sessionLinks();
};

export default NavBar;



// <Link to="/signup">Sign up</Link>

// <Link to="/login">Log in</Link>
