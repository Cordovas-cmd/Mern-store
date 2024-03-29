import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/CartProvider.jsx'
import { CurrentUserProvider } from './context/CurrentUserProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CurrentUserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CurrentUserProvider>
  </React.StrictMode>
)
