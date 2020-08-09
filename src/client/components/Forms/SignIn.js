import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SignIn({ onSubmit }) {
  const [email, setEmail] = useState('nielsschmidt92@gmail.com');
  const [password, setPassword] = useState('');
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit({ email, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email:{' '}
        <input
          type="email"
          name="email"
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
          value={password}
          onChange={handlePasswordInput}
          required
        />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
