import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  )

  const signedIn = () => (
    <div>
      <h3>Hi, {currentUser.name}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  )

  return currentUser ? signedIn() : sessionLinks();
};

export default Greeting;
