import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './style.css';
import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/react project">
    <Fragment>
      <App />
      <ToastContainer />
    </Fragment>
  </BrowserRouter>
);
