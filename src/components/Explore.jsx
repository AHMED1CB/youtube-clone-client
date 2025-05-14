import '../styles/Explore.css';
import ExploreHeader from './ExploreHeader';
import Videos from './Videos';
import { Container } from '@mui/material'
export default () => {
    return (
        <main className="explore-page">
            <Container className="explore-contnet">
                <ExploreHeader/>
                <Videos/> {/* We Use Static Date For This Time Only I will Change It When i Create An Api */}
            </Container>
            
        </main>
        
    )
}