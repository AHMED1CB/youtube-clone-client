import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import '../styles/Loading.css'; 

const Loading = ({ small = false }) => {
  return (
    <Box className={`loading-container ${small ? 'small' : ''}`}>
      <div className="spinner-container">
        <div className="pulse-effect"></div>
      </div>
      
    </Box>
  );
};

export default Loading;