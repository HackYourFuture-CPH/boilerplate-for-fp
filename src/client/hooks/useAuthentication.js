import { useEffect, useState } from 'react';
import { auth } from '../firebase';

function authRedirect() {
  if (
    window.location.pathname === '/sign-in' ||
    window.location.pathname === '/'
  ) {
    window.location.href = '/profile';
  }
}

export function useAuthentication() {
  // default not authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // default is loading
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // if user exists it means authenticated
      if (user) {
        setIsAuthenticated(true);
        setIsLoading(false);
        authRedirect();
      } else {
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    });
    return () => {}; // eslint-disable-line
  }, []);
  return { isAuthenticated, isLoading };
}
