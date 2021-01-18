import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { FirebaseProvider } from './firebase/FirebaseContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FirebaseProvider
      initialAuth={{
        inTest: true,
        onAuthStateChanged: () => {
          Promise.resolve(true);
        },
      }}
    >
      <App />
    </FirebaseProvider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
