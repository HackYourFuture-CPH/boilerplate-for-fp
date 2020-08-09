import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, isAuth, ...rest }) {
  return (
    <Route
      // (we need to spread)
      {...rest} // eslint-disable-line
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
  isAuth: PropTypes.bool.isRequired,
};
