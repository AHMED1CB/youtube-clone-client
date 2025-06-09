import { configureStore } from '@reduxjs/toolkit'
import  displayReducer  from '../features/Display/DisplaySlice'
import  authReducer  from '../features/auth/AuthSlice'

export const store = configureStore({
    reducer:{
        display: displayReducer,
        auth : authReducer
    }
})