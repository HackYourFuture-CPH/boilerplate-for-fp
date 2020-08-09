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

export function useAuth() {
  // default not authenticated
  const [isAuth, setIsAuth] = useState(false);
  // default is loading
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // if user exists it means authenticated
      if (user) {
        setIsAuth(true);
        setIsLoading(false);
        authRedirect();
      } else {
        setIsAuth(false);
        setIsLoading(false);
      }
    });
    return () => {}; // eslint-disable-line
  }, []);
  return { isAuth, isLoading };
}
