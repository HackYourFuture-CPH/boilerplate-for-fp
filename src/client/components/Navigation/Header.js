import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { signOut } from '../../firebase/auth';

export default function Header({ isAuth = false }) {
  if (isAuth) {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <button type="button" onClick={signOut}>
          Sign out
        </button>
      </nav>
    );
  }
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/sign-in">Sign in</Link>
      <Link to="/sign-up">Sign up</Link>
      <Link to="/reset-password">Reset password</Link>
    </nav>
  );
}

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};
