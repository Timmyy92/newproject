import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const router = createBrowserRouter(
  [
    {
      path: "/"
    },
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);
