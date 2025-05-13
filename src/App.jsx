import { Routes , Route } from 'react-router-dom';

import  HomePage from './components/HomePage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { getModeTheme } from './app/Theme';
import { useState } from 'react';
import { useEffect } from 'react';
import { modeContext } from './contexts/Mode';
import { NavContext } from "./contexts/Navbar"



function App() {

  const [mode , setMode] = useState(null);
  const [expanded , setExpanded] = useState(false);


  useEffect(() => {
    let currentMode = localStorage.mode ?? 'light';
    setMode(currentMode)
  }, [])


  return mode && (
    <ThemeProvider theme={getModeTheme(mode)}>
      <CssBaseline>
        <NavContext.Provider value={{expanded , setExpanded}}>
          <modeContext.Provider value={{mode , setMode}}>
                <Routes> 
                    <Route path='/' element={<HomePage/>} />
                </Routes>
          </modeContext.Provider>
        </NavContext.Provider>
      </CssBaseline>
  </ThemeProvider>
   
  )
}

export default App;
