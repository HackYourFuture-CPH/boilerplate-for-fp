import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SignUp({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handlePasswordConfirmInput = (e) => setPasswordConfirm(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, passwordConfirm });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email:{' '}
        <input
          type="email"
          name="email"
          placeholder="Write your email"
          value={email}
          onChange={handleEmailInput}
          required
        />
      </label>
      <label htmlFor="password">
        Password:{' '}
        <input
          type="password"
          name="password"
          placeholder="Write your password"
          value={password}
          onChange={handlePasswordInput}
          required
        />
      </label>
      <label htmlFor="password">
        Password - confirm:{' '}
        <input
          type="password"
          name="password"
          placeholder="Write your password again"
          value={passwordConfirm}
          onChange={handlePasswordConfirmInput}
          required
        />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
}

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
