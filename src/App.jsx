import { Routes , Route } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { getModeTheme } from './app/Theme';
import { useSelector , useDispatch} from 'react-redux'

import HomePage from './components/HomePage';
import Upload from './components/Upload';
import MainLayout from './layouts/MainLayout';
import Subscriptions from './components/Subscriptions';
import ShortsPage from './components/ShortVideos';
import UploadVideo from './components/UploadVideo';
import History from './components/History';
import Channel from './components/Channel';

import {setLoading} from './features/Display/DisplaySlice';
import { useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';



function App() {

  const mode = useSelector((state) => state.display.mode );
  

  const dispatch = useDispatch();

  useEffect(() => {
       
    dispatch(setLoading(false))

  } , [])




  return  (

        <ThemeProvider theme={getModeTheme(mode)}>
          <CssBaseline>
                  <Routes>

                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<HomePage/>} />
                        <Route path="profile"  element={<Channel profile/>} />

                    </Route>

                    <Route path="/auth" >
                        <Route path="login" element={<Login/>} />
                        <Route path="register" element={<Register/>} />
                    </Route>

                    <Route path="/feed" element={<MainLayout/>}>
                        <Route path="subscriptions" element={<Subscriptions/>} />
                        <Route path="shorts" element={<ShortsPage/>} />
                        <Route path='history' element={<History/>} />
                    </Route>

                    <Route path="/upload" element={<MainLayout/>}>
                        <Route index element={<Upload/>}/>
                        <Route path="video" element={<UploadVideo/>}  />

                    </Route>


                      
                      {/* Replace Later With Dynamic Route */}

                    <Route path="/channel" element={<MainLayout/>}>
                        <Route path="AHMED1CB" element={<Channel/>} />
                    </Route>

                  
                  </Routes>
          </CssBaseline>
      </ThemeProvider>

   
  )
}

export default App;
