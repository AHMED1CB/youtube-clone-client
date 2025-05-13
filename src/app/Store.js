import { configureStore } from '@reduxjs/toolkit'
import  displayReducer  from '../features/Display/DisplaySlice'

export const store = configureStore({
    reducer:{
        display: displayReducer
    }
})