import React from 'react';
import ReactDOM from 'react-dom/client';  // Use 'react-dom/client' for React 18
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

// Use createRoot instead of render
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
