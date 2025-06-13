import { createAsyncThunk ,  createSlice } from '@reduxjs/toolkit'
import { utils } from '../../app/utils';
import axios from 'axios';

export const getVideos = createAsyncThunk('videos/getRandom' , async (count , {rejectWithValue}) => {

    try{
        const response = await axios.post(utils.join('videos'));
    
        return response.data;
    }catch(error){
        return rejectWithValue(error)
    }

});



const VideosSlice = createSlice({
    name: 'video',
    initialState: {
      videos: null,
      isLoading: false,
      
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getVideos.pending , (state) => {
            state.isLoading = true;
        }) 

        builder.addCase(getVideos.rejected , (state , action) => {
            state.isLoading = false;
        }) 

        builder.addCase(getVideos.fulfilled , (state , action) => {
            state.isLoading = false;
            state.videos = action.payload.data.videos;

        }) 
    }

})

export default VideosSlice.reducer;

