import Videos from "./Videos"
import { Container } from '@mui/material'
import '../styles/HomePage.css';

export default () => {


    return (
        <>
             <main className="home-page">
                    <Container className="homepage-content">
                        <Videos/>
                    </Container>
             </main>
        </>
    )

}