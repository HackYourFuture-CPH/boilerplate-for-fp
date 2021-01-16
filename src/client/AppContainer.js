import React from 'react';

import App from './App';
import { ErrorBoundary } from './ErrorBoundary';
import { FirebaseProvider } from './firebase';

function AppContainer() {
  return (
    <ErrorBoundary>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </ErrorBoundary>
  );
}

export default AppContainer;
