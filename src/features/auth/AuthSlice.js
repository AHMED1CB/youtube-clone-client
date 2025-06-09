import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

import {loginUser , registerUser} from './AuthServices';


export const authSlice = createSlice({
    name: 'authSlice',

    initialState: {
        token : '',
        user : '',
        isAuth: '',
        isLoading : false,
        errors : null

    },
    reducers:{
        logout : (state) => {
            localStorage.removeItem('token');

            state.token = '';

            state.isAuth = false;

        },


        clearError : (state) => {
            state.errors = null;
        }
    

    },

    extraReducers: (builder) => {

        
            builder.addCase(registerUser.pending , (state) => {
                state.isLoading = true;
                state.errors = null;
            })

            builder.addCase(registerUser.fulfilled , (state) => {
                state.isLoading = false;
            })

            builder.addCase(registerUser.rejected , (state , action) => {
                state.isLoading = false;
                state.errors = action.payload;
            })

            // login

            builder.addCase(loginUser.pending , (state) => {
                state.isLoading = true;
                state.errors = null;
            })

            builder.addCase(loginUser.fulfilled , (state , action) => {
                state.isLoading = false;
                state.token = action.payload.data.token;
                localStorage.setItem('token' , action.payload.data.token);
                state.isAuth = true;
            })

            builder.addCase(loginUser.rejected , (state , action) => {
                state.isLoading = false;
                state.errors = action.payload;
            })



    }


}   


)




export const { logout , clearError } = authSlice.actions

export default authSlice.reducer

