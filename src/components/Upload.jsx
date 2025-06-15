import {Container} from '@mui/material';
import Icon from './Icon';
import '../styles/Upload.css'
import { useNavigate } from 'react-router-dom';
export default function uploadVideo ()  {

    const go = useNavigate()

    return (
        <main className="upload-page">
        <Container className="upload-contnet">
                    <h2 className="heading">Upload New</h2>
                <div className="options">
                    
                    <div className="option" onClick={() => go('/upload/video')}>
                        <Icon icon="monitor-play"/>
                        <span className="option-name">Upload Video</span>
                    </div>

                    <div className="option" onClick={() => go('/upload/short')}>
                        <Icon icon="monitor-play"/>
                        <span className="option-name">Upload Short</span>
                    </div>


                </div>

        </Container>    
    </main>
    

    )

}