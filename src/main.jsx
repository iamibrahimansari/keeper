import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {KeeperProvider} from './store/KeeperContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KeeperProvider>
      <App />
    </KeeperProvider>
  </React.StrictMode>,
)
