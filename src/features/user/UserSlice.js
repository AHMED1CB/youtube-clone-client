import { createSlice } from '@reduxjs/toolkit';


import {loadUser , changeHistoryState ,   clearHistoryVideos} from './UserServices'
  

const userSlice = createSlice({
    name: 'user',
    initialState: {
      user: null,
      isLoading: false,
      errors: null,
      status: 0
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(loadUser.pending , (state) => {
            state.isLoading = true;
            state.errors = null
        }) 

        builder.addCase(loadUser.rejected , (state , action) => {
            state.isLoading = false;
            state.errors = action.payload?.response?.data || 'Internal Server Error';
            
            if (action.payload.request.status !== 0){
              localStorage.removeItem('token');
              state.status = 500;              
            }else{
              alert('Server Error Please Try Again Later')
            }
        
          }) 

        builder.addCase(loadUser.fulfilled , (state , action) => {
            state.isLoading = false;
            state.errors = null;
            state.user = action.payload.data.user;

            state.status = 200;
        }) 


        // changeState


        builder.addCase(changeHistoryState.pending , (state) => {
          state.isLoading = true;
          state.errors = null
      }) 

      builder.addCase(changeHistoryState.rejected , (state , action) => {
          state.isLoading = false;
          state.errors = action.payload.errors;
      }) 

      builder.addCase(changeHistoryState.fulfilled , (state , action) => {
          state.errors = null;
          state.user.historyState = action.payload.data.currentState;
          state.isLoading = false;
        }) 
        
        // clear


      builder.addCase(clearHistoryVideos.pending , (state) => {
          state.isLoading = true;
          state.errors = null
      }) 

      builder.addCase(clearHistoryVideos.rejected , (state , action) => {
          state.isLoading = false;
          state.errors = action.payload.errors;
      }) 

      builder.addCase(clearHistoryVideos.fulfilled , (state , action) => {
          state.errors = null;
          state.user.history = [];
          state.isLoading = false;
        }) 


      
        



    }

})

export default userSlice.reducer;
