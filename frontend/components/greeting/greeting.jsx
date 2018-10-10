import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className='navbar'>
        <div className='logo'>
        </div>
        <div className="nav-links">
          <Link to="/signup">Sign up</Link>
          <br/>
          <Link to="/login">Log in</Link>
        </div>
    </div>
  )

  const signedIn = () => (
    <div className='navbar'>
        <div className='logo'>
        </div>
        <div className="nav-links">
          <h3>Hi, {currentUser.name}</h3>
          <button onClick={logout}>Logout</button>
        </div>
  </div>
  )

  return currentUser ? signedIn() : sessionLinks();
};

export default Greeting;
