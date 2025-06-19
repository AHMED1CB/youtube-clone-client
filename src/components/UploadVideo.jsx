import {
  Button,
  TextField,
  FormControl,
  FormLabel,
  Container
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Icon from './Icon';

import '../styles/UploadVideo.css';
import { useState , useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset, uploadVideo } from '../features/videos/VideosSlice';
import { useNavigate } from 'react-router-dom'

const HiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

/*--------------------------------
!! IMPORTANT

    Uploading Videos is Only Available On 
    Local Device Because The Api Server 
    Dont Allow To use FFmpeg Or Proces Videos 

--------------------------------*/


const UploadVideo = () => {
 
    const [data , setData] = useState({
        video: null,
        title: null,
        descreption: null,
        cover: null
    });


    const isLoading = useSelector(state => state.videos.isLoading);
    const isUploaded = useSelector(state => state.videos.isUploaded);
    const errors = useSelector(state => state.videos.errors);

    const dispatch = useDispatch();

    const go = useNavigate();

    const handleVideoUpload = (event) => {
        event.preventDefault();
        
        const fullData = new FormData();

        Object.keys(data).map(key => {
            if (data[key]){
                fullData.append(key , data[key]);
            }
        })

    
        dispatch(uploadVideo(fullData));

    }


    useEffect(() => {

        if (isUploaded){
            dispatch(reset())
            go('/')
        }else{
            if (!isLoading && errors){
                alert(Object.values(errors)[0])
            }
        }

    } , [isLoading , isUploaded])


  return (
    <main className="upload-page upload-video-pag">
            <h2 className="heading">Upload New Video</h2>
        <Container className="upload-page-content upload-content">
      
                <form onSubmit={handleVideoUpload}>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <FormLabel required sx={{ mb: 1 }}>Video File</FormLabel>
                    <Button
                    component="label"
                    variant="outlined"
                    startIcon={<Icon icon="cloud"/>}
                    fullWidth
                    sx={{ py: 2 }}
                    >
                    {data.video ? data.video.name : 'Select Video File'}
                    <HiddenInput 
                        type="file" 
                        accept="video/*" 
                        required
                        onChange={() => setData({...data , video: event.target.files[0]})}
                    />
                    </Button>
                   
                </FormControl>
                
                <TextField
                    label="Video Title"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 3 }}
                    onChange={() => setData({...data , title: event.target.value})}
                />
                
                <TextField
                    label="Video Description"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    onChange={() => setData({...data , descreption: event.target.value})}
                    sx={{ mb: 3 }}
                />
                
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <FormLabel sx={{ mb: 1 }}>Thumbnail (Optional)</FormLabel>
                    <Button
                    component="label"
                    variant="outlined"
                    startIcon={<Icon icon="cloud" />}
                    onChange={() => setData({...data , cover: event.target.files[0]})}
                    fullWidth
                    sx={{ py: 2 }}
                    >
                    {data.cover ? data.cover.name : 'Select Thumbnail'}
                    <HiddenInput 
                        type="file" 
                        accept="image/*" 
                    />
                    </Button>
                    
                </FormControl>
                
                <Button
                    disabled={isLoading}
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ py: 1.5, mt: 2 }}
                >
                 {isLoading ? 'Uploading...' : 'Upload'}
                </Button>
                </form>
        </Container>
    </main>

  );
};

export default UploadVideo;