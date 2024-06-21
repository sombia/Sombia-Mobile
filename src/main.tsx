import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

if (import.meta.env.MODE != "cordova") {
  onDeviceReady();
} else {
  document.addEventListener('deviceready', onDeviceReady, false);
}

function onDeviceReady() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}