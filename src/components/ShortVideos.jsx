import { Container } from "@mui/material"
import  '../styles/Shorts.css'
import ShortVideo from "./ShortVideo"

import { useSelector , useDispatch} from 'react-redux';
import { useEffect } from "react";
import { getShorts } from "../features/videos/VideosSlice";

import Loading from './Loading'
import { useUser } from "../contexts/User";

export default () => {

    

    const shorts = useSelector(state => state.videos.shorts);
    const isLoading = useSelector(state => state.videos.isLoading);
    const dispatch = useDispatch();
    let currentUser = useUser()
    useEffect(() =>{
            if (!shorts){
                dispatch(getShorts())
            }

    } , [shorts])
    
    const shortVideos = shorts ? shorts.map(short => <ShortVideo currentUser={currentUser} key={short.id} data={short}/>) : null;

    return (
        <main className="shortVideos-page">
            <Container className="shorts-content">
                    {
                        shortVideos || (isLoading ? <Loading/> : null)
                         || (<h2 className="heading">No Short Videos On App</h2>)
                    }

            </Container>
        </main>
    )
}