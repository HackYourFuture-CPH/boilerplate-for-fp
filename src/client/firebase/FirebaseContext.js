import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { resetPassword, signIn, signOut, signUp } from './auth';
import { initFirebase } from './configure';

const FirebaseContext = createContext();

export function FirebaseProvider({ children, initialAuth }) {
  const [auth, setAuth] = useState(initialAuth);

  useEffect(() => {
    if (auth) {
      // Don't initialize twice
      return;
    }

    try {
      const r = initFirebase();
      setAuth(r.auth);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(
        'Unable to initialize firebase, check console for errors',
        e,
      );
    }
  }, [auth]);

  const value = useMemo(
    () => ({
      auth,
      isInitialized: !!auth,
      signIn: (data) => signIn(auth, data),
      signUp: (data) => signUp(auth, data),
      signOut: () => signOut(auth),
      resetPassword: (data) => resetPassword(auth, data),
    }),
    [auth],
  );

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
  // This time we know what we are doing :)
  // eslint-disable-next-line react/forbid-prop-types
  initialAuth: PropTypes.object,
};

FirebaseProvider.defaultProps = {
  initialAuth: null,
};

/**
 * Gets the current value for FirebaseContext
 *
 * @typedef {object} FirebaseContextType
 * @property {firebase.auth.Auth} auth - Firebase auth provider
 * @property {boolean} isInitialized - True if Firebase is initialized
 * @property {({email, password}) => Promise<void>} signIn - Signs in the user
 * @property {({email, password}) => Promise<void>} signUp - Signs in the user
 * @property {() => Promise<void>} signOut - Signs out the user
 * @property {({email}) => Promise<void>} resetPassword - Resets the password for the user with the specified e-mail
 *
 * @returns {FirebaseContextType}
 */
export function useFirebase() {
  const firebase = useContext(FirebaseContext);

  if (!firebase) {
    throw new Error('This component must be under FirebaseProvider');
  }

  return firebase;
}
