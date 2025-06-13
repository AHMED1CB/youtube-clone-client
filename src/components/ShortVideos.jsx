import { Container } from "@mui/material"
import  '../styles/Shorts.css'
import FlexBox from "./mui/FlexBox"
import ShortVideo from "./ShortVideo"

import { useSelector , useDispatch} from 'react-redux';
import { useEffect } from "react";
import { getShorts } from "../features/videos/VideosSlice";

export default () => {

    

    const shorts = useSelector(state => state.videos.shorts);
    const isLoading = useSelector(state => state.videos.isLoading);

    const dispatch = useDispatch();

    useEffect(() =>{

        dispatch(getShorts())


    } , [])

    

    return (
        <main className="shortVideos-page">
            <Container className="shorts-content">
                    {
                        shorts?.length > 0 &&  
                        (
                            <FlexBox className="shorts">
                                <ShortVideo/>
                                <ShortVideo/>
                                <ShortVideo/>
                                <ShortVideo/>
                            </FlexBox> 
                        ) || (isLoading && <h2 className="heading">Loading Shorts</h2>) || (
                            shorts?.length == 0 && <h2 className="heading">no Short Videos On App</h2>
                        )
                    }

            </Container>
        </main>
    )
}