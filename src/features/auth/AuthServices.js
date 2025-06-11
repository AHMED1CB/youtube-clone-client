import axios from 'axios';
import { utils } from '../../app/utils';



import { createAsyncThunk} from '@reduxjs/toolkit'


export const registerUser = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
      try {
          const response = await axios.post(utils.join('auth', 'register'), data, { headers: {} });
          return response.data;
      } catch (error) {

        const errorData = {
              error: true,
              errors: error.response?.data?.data?.errors || 
                      error.response?.data?.message || 
                      error.message
          };
          return rejectWithValue(errorData);
      }
  }
);



  export const loginUser = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue}) => {
      try {
        const response = await axios.post(utils.join('auth' , 'login') , data , {headers : {}} );
        return response.data;
      } catch (error) {
        return rejectWithValue({
            error : true,
            errors: error.response?.data?.message || error.message 
        });
      }
    }
  );
