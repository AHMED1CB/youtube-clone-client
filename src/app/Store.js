import { configureStore } from '@reduxjs/toolkit'
import  displayReducer  from '../features/Display/DisplaySlice'
import  authReducer  from '../features/auth/AuthSlice'
import  userReducer  from '../features/user/UserSlice'
import videosReducer from '../features/videos/VideosSlice'
import channelReducer from '../features/channel/channelSlice'


export const store = configureStore({
    reducer:{
        display: displayReducer,
        auth : authReducer,
        user : userReducer,
        videos: videosReducer,
        channel: channelReducer

    }
})