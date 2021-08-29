import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (!document.getElementById('mike-survey')) {
      var div = document.createElement('div');
      div.id = 'mike-survey';
      document.body.appendChild(div);
    }

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('mike-survey')
    );
  }, 2000)
})