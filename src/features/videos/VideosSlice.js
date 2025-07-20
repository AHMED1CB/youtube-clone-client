import { createSlice } from '@reduxjs/toolkit'

import {getVideos , getVideo , getShorts , uploadVideo , uploadShort , reactOnVideo , commentOnVideo , commentOnShort , 
    reactOnShort ,  loadShort} from './VideosServices'











const VideosSlice = createSlice({
    name: 'video',
    initialState: {
      videos: null,
      video: null,
      shorts: null,
      short: null,
      isLoading: false,
      errors: null,
      isUploaded: null
    },
    reducers: {
        reset: (state) => {
                state.isLoading = false;
                state.errors = null;
                state.isUploaded =false;
                state.video =false;

        },

        setVideoData : (state , action) => {
            state.video = action.payload;
        },
        setVideoChannel : (state , action) => {
            state.video.channel = action.payload;
        }
    },

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


        // Shorts 

        builder.addCase(getShorts.pending , (state) => {
            state.isLoading = true;
        }) 

        builder.addCase(getShorts.rejected , (state , action) => {
            state.isLoading = false;
        }) 

        builder.addCase(getShorts.fulfilled , (state , action) => {
            state.isLoading = false;
            state.shorts = action.payload.data.videos;
        }) 


        // upload Videos

        builder.addCase(uploadVideo.pending , (state) => {
            state.isLoading = true;
        }) 

        builder.addCase(uploadVideo.rejected , (state , action) => {
            state.isLoading = false;
            state.errors = action.payload?.response?.data?.data?.errors || {server: 'Internal Server Error'};
        }) 

        builder.addCase(uploadVideo.fulfilled , (state , action) => {
            state.isLoading = false;
            state.isUploaded = true;
        }) 

        // Uploading Shorts

        builder.addCase(uploadShort.pending , (state) => {
            state.isLoading = true;
        }) 

        builder.addCase(uploadShort.rejected , (state , action) => {
            state.isLoading = false;
            state.errors = action.payload?.response?.data?.data?.errors || {server: 'Internal Server Error'};
        }) 

        builder.addCase(uploadShort.fulfilled , (state , action) => {
            state.isLoading = false;
            state.isUploaded = true;
        }) 

        // Load Video


        builder.addCase(getVideo.pending , (state) => {
            state.isLoading = true;
        }) 

        builder.addCase(getVideo.rejected , (state , action) => {
            state.isLoading = false;
            state.errors = action.payload?.response?.data?.data?.errors || {server: 'Internal Server Error'};
        }) 

        builder.addCase(getVideo.fulfilled , (state , action) => {
            state.isLoading = false;
            state.isUploaded = true;
            state.video = action.payload.data.video;
        }) 


        // React Video

        builder.addCase(reactOnVideo.pending , (state) => {
            state.isLoading = true;
        }) 

        builder.addCase(reactOnVideo.rejected , (state , action) => {
            state.isLoading = false;
            state.errors = action.payload?.response?.data?.data?.errors || {server: 'Internal Server Error'};
        }) 

        builder.addCase(reactOnVideo.fulfilled , (state , action) => {
            state.isLoading = false;
        }) 


        
        builder.addCase(commentOnVideo.pending , (state) => {
            state.isLoading = true;
        }) 

        builder.addCase(commentOnVideo.rejected , (state , action) => {
            state.isLoading = false;
            state.errors = action.payload?.response?.data?.data?.errors || {server: 'Internal Server Error'};
        }) 

        builder.addCase(commentOnVideo.fulfilled , (state , action) => {
            state.isLoading = false;
        }) 
        
        //------------------

        builder.addCase(commentOnShort.pending , (state) => {
            state.isLoading = true;
        }) 

        builder.addCase(commentOnShort.rejected , (state , action) => {
            state.isLoading = false;
            state.errors = action.payload?.response?.data?.data?.errors || {server: 'Internal Server Error'};
        }) 

        builder.addCase(commentOnShort.fulfilled , (state , action) => {
            state.isLoading = false;
        }) 
        
        //------------------

        builder.addCase(reactOnShort.pending , (state) => {
            state.isLoading = true;
        }) 

        builder.addCase(reactOnShort.rejected , (state , action) => {
            state.isLoading = false;
            state.errors = action.payload?.response?.data?.data?.errors || {server: 'Internal Server Error'};
        }) 

        builder.addCase(reactOnShort.fulfilled , (state , action) => {
            state.isLoading = false;
        }) 


        
        //------------------

        builder.addCase(loadShort.pending , (state) => {
            state.isLoading = true;
        }) 

        builder.addCase(loadShort.rejected , (state , action) => {
            state.isLoading = false;
            state.errors = action.payload?.response?.data?.data?.errors || {server: 'Internal Server Error'};
        }) 

        builder.addCase(loadShort.fulfilled , (state , action) => {
            state.isLoading = false;
            state.short = action.payload.data.video;
        }) 


    }

})

export const { reset  , setVideoData , setVideoChannel } = VideosSlice.actions;

export default VideosSlice.reducer;

