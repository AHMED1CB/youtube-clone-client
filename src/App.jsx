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
import UploadShort from './components/UploadShort';
import History from './components/History';
import Channel from './components/Channel';
import Profile from './components/Profile';

import {setLoading} from './features/Display/DisplaySlice';
import { useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import EditProfile from './components/EditProfile';
import VideoPage from './components/VideoPage';


function App() {

  const mode = useSelector((state) => state.display.mode );
  




  return  (

        <ThemeProvider theme={getModeTheme(mode)}>
          <CssBaseline>
                  <Routes>

                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<HomePage/>} />
                        <Route path="profile"  element={<Profile/>  } />
                        <Route path="profile/edit" element={<EditProfile/>  } />
                    </Route>


          
                    <Route path="/profile" element={<MainLayout/>}>
                        <Route index  element={<Profile/>  } />
                        <Route path="edit" element={<EditProfile/>  } />
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
                        <Route path="short" element={<UploadShort/>}  />

                    </Route>
                      

                    <Route path="/channel" element={<MainLayout/>}>
                    
                        <Route path=":channelUsername" element={ <Channel/> } />
                    
                    </Route>

                    <Route path="/videos" element={<MainLayout/>}>
                    
                        <Route path=":videoSlug" element={<VideoPage/> } />
                    
                    </Route>

                  


                  </Routes>
          </CssBaseline>
      </ThemeProvider>

   
  )
}

export default App;
