import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { utils } from '../../app/utils';


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
            state.errors = action.payload.errors
        }) 

        builder.addCase(loadUser.fulfilled , (state , action) => {
            state.isLoading = false;
            state.errors = null;
            state.user = action.payload.data.user;

            state.status = 200;
        }) 
    }

})

export default userSlice.reducer;
