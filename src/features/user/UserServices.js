import { createAsyncThunk } from '@reduxjs/toolkit';
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
  
