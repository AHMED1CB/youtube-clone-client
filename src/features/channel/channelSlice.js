import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { utils } from "../../app/utils";

export const loadChannel = createAsyncThunk(
    'channel/get',
    async (channelUsername ,{ rejectWithValue }) => {
      try {
        const response = await axios.post(utils.join('channels' , channelUsername) , {} , {
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

  

const channelSlice = createSlice({
    name: 'channel',
    initialState: {
      channel: null,
      isLoading: false,
      errors: null,
      status: 0
    },
    reducers: {

      setChannel : (state,action) =>{
        state.channel = action.payload;
      }

    },

    extraReducers: (builder) => {
        builder.addCase(loadChannel.pending , (state) => {
            state.isLoading = true;
            state.errors = null;
        })

        // Rejected Load Channel

        .addCase(loadChannel.rejected , (state , action) => {
            state.isLoading = false;
            state.status = 400;
        })
        
        // Fulfilled Load Channel
        
        .addCase(loadChannel.fulfilled , (state , action) => {
            state.isLoading = false;
            state.errors = null;
            state.status = 200;
            state.channel = action.payload.data.channel;
             
        })


        // Subscribe Channel



          builder.addCase(subscribeChannel.pending , (state) => {
            state.isLoading = true;
            state.errors = null;
        })

        // Rejected Load Channel

        .addCase(subscribeChannel.rejected , (state , action) => {
            state.isLoading = false;
            state.status = 400;
        })
        
        // Fulfilled Load Channel
        
        .addCase(subscribeChannel.fulfilled , (state , action) => {
            state.isLoading = false;
            state.errors = null;
            
        })



    }

})  



export const {setChannel} = channelSlice.actions

export default channelSlice.reducer