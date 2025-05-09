import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(

  <Fragment>
    <App />
    <ToastContainer />
  </Fragment>
)
