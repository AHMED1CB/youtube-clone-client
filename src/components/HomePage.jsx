import Videos from "./Videos"
import VideosSkeleton from "./skeleton/Videos"
import { Container } from '@mui/material'
import '../styles/HomePage.css';
import { useSelector , useDispatch} from 'react-redux';
import { useEffect } from "react";
import { getVideos } from "../features/videos/VideosSlice";

export default () => {


    const videos = useSelector(state => state.videos.videos);
    const isLoading = useSelector(state => state.videos.isLoading);
    const dispatch = useDispatch();

    useEffect(() =>{

        if (!isLoading && !videos){
            dispatch(getVideos())
        }


    } , [isLoading])




    return videos?.length > 0 && (
        <>
             <main className="home-page">
                    <Container className="homepage-content">
                        <Videos videos={videos}/>
                    </Container>
             </main>
        </>
    ) || (isLoading &&  <VideosSkeleton/>) || (videos?.length == 0 &&  <h2 className="heading">No Videos On App</h2> ) 


}