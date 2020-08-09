import { auth } from './index';

const FIREBASE_ERROR_CODES = {
  WEAK_PASSWORD: 'auth/weak-password',
  WRONG_PASSWORD: 'auth/wrong-password',
  INVALID_EMAIL: 'auth/invalid-email',
  USER_NOT_FOUND: 'auth/user-not-found',
};

/**
 *
 * @param {email, password} (sign in user)
 */
export async function signIn({ email, password }) {
  console.log('he');
  try {
    console.log({ email, password });
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === FIREBASE_ERROR_CODES.WRONG_PASSWORD) {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  }
}

export async function signUp({ email, password }) {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    return true;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === FIREBASE_ERROR_CODES.WEAK_PASSWORD) {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  }
}

export async function resetPassword({ email }) {
  // [START sendpasswordemail]
  try {
    await auth.sendPasswordResetEmail(email);
    // Password Reset Email Sent!
    alert('Password Reset Email Sent!');
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === FIREBASE_ERROR_CODES.INVALID_EMAIL) {
      alert(errorMessage);
    } else if (errorCode === FIREBASE_ERROR_CODES.USER_NOT_FOUND) {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  }
  // [END sendpasswordemail];
}

export function signOut() {
  auth.signOut();
}
