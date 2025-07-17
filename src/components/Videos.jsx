
import  { Container } from '@mui/material'
import VideoCard from './VideoCard'
import '../styles/Video.css';

export default ({videos = [] , channel}) => {

    return  videos && (
        <main className="videos-section">
            <Container className="videos-container">
                    {videos.map(video => <VideoCard key={video.id} channel={channel} data={video}/>)}
            </Container>
        </main>
    )

}