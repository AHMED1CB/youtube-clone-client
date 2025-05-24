
import  { Container } from '@mui/material'
import VideoCard from './VideoCard'
import '../styles/Video.css';
import SkeletonVideos from './skeleton/Videos';
import { useSelector } from 'react-redux';

export default () => {

    let isLoading = useSelector((state) => state.display.isLoading)

    return  isLoading ? <SkeletonVideos/> : (
        <main className="videos-section">
            <Container className="videos-container">
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
            </Container>
        </main>
    )

}