import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { loadShort } from "../features/videos/VideosServices";
import Loading from "./Loading";
import ShortVideos from "./ShortVideos";



export default function ShortPage (){
    
    const {slug} = useParams();

    const shortVideo = useSelector(state => state.videos.short);

    const dispatch = useDispatch();

    useEffect(() => {

        if (!shortVideo){
            dispatch(loadShort(slug));        
        }

    },[shortVideo])


    return shortVideo && (
        <>  
            <ShortVideos manualShorts={[shortVideo]}/>
        </>

    ) || <Loading/>
    

}