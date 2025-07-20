import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



import axios from "axios";
import { utils } from "../../app/utils";


export const loadChannel = createAsyncThunk(
    'channel/get',
    async (channelUsername ,{ rejectWithValue }) => {
      try {
        const response = await axios.get(utils.join('channels' , channelUsername) , {
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



export const subscribeChannel = createAsyncThunk(
  'channel/subscribe',
  async (channelId ,{ rejectWithValue }) => {
    try {
      const response = await axios.post(utils.join('channels' , channelId  , 'subscribe') , {} , {
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

  
