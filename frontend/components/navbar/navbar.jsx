import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions /modal_actions';

const NavBar = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div className='navbar'>
        <div className='logo'>
          <Link to='/'><img id='logo' src='/assets/white_sailboat_logo'/></Link>
        </div>
        <div className="nav-links">
          <button onClick={() => openModal('login')}>Log In</button>
          <br/>
          <button onClick={() => openModal('signup')}>Sign Up</button>
        </div>
    </div>
  )

  const signedIn = () => (
    <div className='navbar'>
        <div className='logo'>
          <Link to='/'><img id='logo' src='/assets/white_sailboat_logo'/></Link>
        </div>
        <div className="nav-links">
          <h3>Hi, {currentUser.name}</h3>
          <button onClick={logout}>Logout</button>
        </div>
  </div>
  )

  return currentUser ? signedIn() : sessionLinks();
};

export default NavBar;



// <Link to="/signup">Sign up</Link>

// <Link to="/login">Log in</Link>
