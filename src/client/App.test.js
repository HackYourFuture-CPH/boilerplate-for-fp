import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { FirebaseProvider } from './firebase/FirebaseContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FirebaseProvider
      initialAuth={{ inTest: true, onAuthStateChanged: () => {} }}
    >
      <Router>
        <App />
      </Router>
    </FirebaseProvider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
