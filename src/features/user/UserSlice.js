import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { utils } from "../../app/utils";

export const loadUser = createAsyncThunk(
    'user/get',
    async (token, { rejectWithValue }) => {
      try {
        const response = await axios.get(utils.join('auth') ,  {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
);


export const changeHistoryState = createAsyncThunk(
  'user/state/change',
  async (_ ,{ rejectWithValue }) => {
    try {
      const response = await axios.post(utils.join('history' , 'changestate') , {} , {
          headers: {
              Authorization: `Bearer ${localStorage.token}`
          }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
  


export const clearHistoryVideos = createAsyncThunk(
  'user/history/clear',
  async (_ ,{ rejectWithValue }) => {
    try {
      const response = await axios.post(utils.join('history' , 'clear') , {} , {
          headers: {
              Authorization: `Bearer ${localStorage.token}`
          }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
  



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
