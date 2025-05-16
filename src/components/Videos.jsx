
import  { Container } from '@mui/material'
import VideoCard from './VideoCard'
import '../styles/Video.css';

export default () => {

    return (
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