import { Routes , Route } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { getModeTheme } from './app/Theme';
import { useSelector} from 'react-redux'

import HomePage from './components/HomePage';
import Explore from './components/Explore';
import MainLayout from './layouts/MainLayout';
import Subscriptions from './components/Subscriptions';
import ShortsPage from './components/ShortVideos';




function App() {

  const mode = useSelector((state) => state.display.mode );
  

  return  (
    <ThemeProvider theme={getModeTheme(mode)}>
      <CssBaseline>
              <Routes> 
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<HomePage/>} />
                    <Route path='explore' element={<Explore/>} />
                </Route>

                <Route path="/feed" element={<MainLayout/>}>
                    <Route path="subscriptions" element={<Subscriptions/>} />
                    <Route path="shorts" element={<ShortsPage/>} />
                </Route>
              
              </Routes>
      </CssBaseline>
  </ThemeProvider>
   
  )
}

export default App;
