import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


// # REACT ROUTER

import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { getModeTheme } from './app/Theme';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> 
        
             <App />
        
    </Router>
  </React.StrictMode>
)
