import { createAsyncThunk  } from '@reduxjs/toolkit'
import { utils } from '../../app/utils';
import axios from 'axios';

export const getVideos = createAsyncThunk('videos/getRandom' , async (count , {rejectWithValue}) => {

    try{
        const response = await axios.get(utils.join('videos') , {headers: {
            Authorization: `Bearer ${localStorage.token}`
        }});
    
        return response.data;
    }catch(error){
        return rejectWithValue(error)
    }

});


export const getVideo = createAsyncThunk('videos/getBySlug' , async (slug , {rejectWithValue}) => {

    try{
        const response = await axios.get(utils.join('videos' , slug) , {headers: {
            Authorization: `Bearer ${localStorage.token}`
        }});

        // Adding View


        return response.data;
    }catch(error){
        return rejectWithValue(error)
    }

});




export const getShorts = createAsyncThunk('videos/getRanodmShorts' , async (_ , {rejectWithValue}) => {

    try{
        const response = await axios.get(utils.join('shorts') , {
            headers: {
            Authorization: `Bearer ${localStorage.token}`
        }
    });
        return response.data;
    }catch(error){
        return rejectWithValue(error)
    }

});

export const uploadVideo = createAsyncThunk('videos/upload' , async (data , {rejectWithValue}) => {

    try{
        const response = await axios.post(utils.join('videos' , 'upload') , data , {
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



export const reactOnVideo = createAsyncThunk('video/react' , async (video , {rejectWithValue}) => {

    try{
        const response = await axios.post(utils.join('videos' , video , 'react') , {} ,  {
            headers:{
                Authorization: `Bearer ${localStorage.token}`
            },
            
        });
    
        return response.data;

    }catch(error){
        return rejectWithValue(error)
    }

});


export const commentOnVideo = createAsyncThunk('video/comment' , async (data , {rejectWithValue}) => {

    try{
        const response = await axios.post(utils.join('videos' , data.video , 'comment') , data ,  {
            headers:{
                Authorization: `Bearer ${localStorage.token}`
            },
            
        });
    
        return response.data;

    }catch(error){
        return rejectWithValue(error)
    }

});




export const commentOnShort = createAsyncThunk('short/comment' , async (data , {rejectWithValue}) => {

    try{
        const response = await axios.post(utils.join('shorts' , data.video , 'comment') , data ,  {
            headers:{
                Authorization: `Bearer ${localStorage.token}`
            },
            
        });
    
        return response.data;

    }catch(error){
        return rejectWithValue(error)
    }

});



export const reactOnShort = createAsyncThunk('short/react' , async (short , {rejectWithValue}) => {

    try{
        const response = await axios.post(utils.join('shorts' , short , 'react') , {} ,  {
            headers:{
                Authorization: `Bearer ${localStorage.token}`
            },
            
        });
    
        return response.data;

    }catch(error){
        return rejectWithValue(error)
    }

});



export const loadShort = createAsyncThunk('short/getOne' , async (slug , {rejectWithValue}) => {

    try{
        const response = await axios.get(utils.join('shorts' , slug ) ,  {
            headers:{
                Authorization: `Bearer ${localStorage.token}`
            },
            
        });
    
        return response.data;

    }catch(error){
        return rejectWithValue(error)
    }

});




