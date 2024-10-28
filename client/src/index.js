import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /**
   * React Strict Mode
   * Will cause playlists to render twice in dev but not in prod
   * Can disable by commenting out to see same view as prod
   * https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
