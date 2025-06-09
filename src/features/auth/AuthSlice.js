import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { utils } from '../../app/utils';

export const registerUser = createAsyncThunk(
    'auth/register',
    async (data, { rejectWithValue}) => {
      try {
        const response = await axios.post(utils.join('auth' , 'register') , data , {headers : {}} );
        return response.data;
      } catch (error) {
        return rejectWithValue({
            error : true,
            errors: error.response?.data?.data?.errors || error.message 
        });
      }
    }
  );



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
                console.log(action.payload)
                state.errors = action.payload;
            })



    }


}   


)




export const { logout , clearError } = authSlice.actions

export default authSlice.reducer

