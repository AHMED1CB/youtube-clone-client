import { createAsyncThunk ,  createSlice } from '@reduxjs/toolkit'
import { utils } from '../../app/utils';
import axios from 'axios';

export const getVideos = createAsyncThunk('videos/getRandom' , async (count , {rejectWithValue}) => {

    try{
        const response = await axios.post(utils.join('videos') , {} , {headers: {
            Authorization: `Bearer ${localStorage.token}`
        }});
    
        return response.data;
    }catch(error){
        return rejectWithValue(error)
    }

});


export const getVideo = createAsyncThunk('videos/getBySlug' , async (slug , {rejectWithValue}) => {

    try{
        const response = await axios.post(utils.join('videos' , slug) , {} , {headers: {
            Authorization: `Bearer ${localStorage.token}`
        }});

        // Adding View



        return response.data;
    }catch(error){
        return rejectWithValue(error)
    }

});




export const getShorts = createAsyncThunk('videos/getRanodmShorts' , async (count , {rejectWithValue}) => {

    try{
        const response = await axios.post(utils.join('shorts'));
    
        return response.data;
    }catch(error){
        return rejectWithValue(error)
    }

});



export const uploadVideo = createAsyncThunk('videos/upload' , async (data , {rejectWithValue}) => {

    try{
        const response = await axios.post(utils.join('videos' , 'upload') , data ,  {
            headers:{
                Authorization: `Bearer ${localStorage.token}`
            },
            
        });
    
        return response.data;
    }catch(error){
        return rejectWithValue(error)
    }

});



export const uploadShort = createAsyncThunk('shorts/upload' , async (data , {rejectWithValue}) => {

    try{
        const response = await axios.post(utils.join('shorts' , 'upload') , data ,  {
            headers:{
                Authorization: `Bearer ${localStorage.token}`
            },
            
        });
    
        return response.data;
    }catch(error){
        return rejectWithValue(error)
    }

});



const VideosSlice = createSlice({
    name: 'video',
    initialState: {
      videos: null,
      video: null,
      shorts: null,
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



    }

})

export const { reset } = VideosSlice.actions;

export default VideosSlice.reducer;

