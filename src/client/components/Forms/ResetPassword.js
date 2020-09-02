import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ResetPassword({ onSubmit }) {
  const [email, setEmail] = useState('');
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email });
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
      <button type="submit">Reset password</button>
    </form>
  );
}

ResetPassword.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
