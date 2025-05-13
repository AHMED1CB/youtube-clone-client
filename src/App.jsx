import { Routes , Route } from 'react-router-dom';

import  HomePage from './components/HomePage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { getModeTheme } from './app/Theme';
import { useSelector} from 'react-redux'




function App() {

  const mode = useSelector((state) => state.display.mode );
  

  return  (
    <ThemeProvider theme={getModeTheme(mode)}>
      <CssBaseline>
              <Routes> 
                    <Route path='/' element={<HomePage/>} />
              </Routes>
      </CssBaseline>
  </ThemeProvider>
   
  )
}

export default App;
