import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { ErrorBoundary } from './ErrorBoundary';
import { FirebaseProvider } from './firebase';

function AppContainer() {
  return (
    <ErrorBoundary>
      <FirebaseProvider>
        <Router>
          <App />
        </Router>
      </FirebaseProvider>
    </ErrorBoundary>
  );
}

export default AppContainer;
