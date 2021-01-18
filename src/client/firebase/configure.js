import * as firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/messaging';
import config from './config';

const configuration = {
  apiKey: config.FIREBASE_APP_API_KEY,
  authDomain: config.FIREBASE_APP_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_APP_DATABASE_URL,
  messagingSenderId: config.FIREBASE_APP_MESSAGING_SENDER_ID,
  projectId: config.FIREBASE_APP_PROJECT_ID,
  storageBucket: config.FIREBASE_APP_STORAGE_BUCKET,
};

export function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(configuration);
  }

  const auth = firebase.auth();
  const db = firebase.database();
  const firestore = firebase.firestore();

  /**
   * Connect to firestore emulator if running locally
   */
  if (window.location.hostname === 'localhost') {
    firestore.settings({
      host: 'localhost:8080',
      ssl: false,
    });
  }

  return {
    auth,
    db,
    firestore,
  };
}
