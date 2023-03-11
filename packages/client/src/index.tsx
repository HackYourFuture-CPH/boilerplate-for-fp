import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

assertEnvironment();

const element = document.getElementById('root');
if (element) {
  const root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

function assertEnvironment() {
  if (import.meta.env.VITE_API_HOST === undefined) {
    throw new Error('Missing environment variable: VITE_API_HOST');
  }

  if (import.meta.env.VITE_API_PORT === undefined) {
    throw new Error('Missing environment variable: VITE_API_PORT');
  }

  if (import.meta.env.VITE_API_PATH === undefined) {
    throw new Error('Missing environment variable: VITE_API_PATH');
  }
}
