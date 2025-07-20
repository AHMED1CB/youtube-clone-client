import { Avatar, Button } from "@mui/material";
import Icon from "./Icon";
import { utils } from "../app/utils";
import { useEffect, useRef, useState } from "react";
import '../styles/Shorts.css'
import { useDispatch } from "react-redux";
import { subscribeChannel } from "../features/channel/channelServices";
import { useNavigate } from 'react-router-dom'
import Comments from "./Comments";
import { reactOnShort } from "../features/videos/VideosServices";
export default ({ data , currentUser }) => {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isSubscribed, setIsSubscribed] = useState(data.channel.is_subscribed ?? null);
    const [isReacted, setIsReacted] = useState(data.is_reacted);
    const [reactionCount, setReactionCount] = useState(data.reactions_count);
    const go = useNavigate();

    let [showComments , setShowComments] = useState(false);
    let [comments , setComments] = useState(data.comments);

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach(async (entry) => {
                        if (entry.isIntersecting  ) {
                                try{
                                    await videoRef.current.play();                        
                                }catch{}
                                
                        } else {
                                if(videoRef.current){
                                    videoRef.current.pause();
                                } 
                                
                        }
                            
                    });
            

            },
            { threshold: 0.7 }
        );
    
        if (videoRef.current) {
            observer.observe(videoRef.current);
        }
    
        return () => observer.disconnect();
    }, []);


    // Change Progress 
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateProgress = () => {
            setProgress((video.currentTime / video.duration) * 100);
        };

        video.addEventListener('timeupdate', updateProgress);
        video.addEventListener('play', () => setIsPlaying(true));
        video.addEventListener('pause', () => setIsPlaying(false));

        return () => {
            video.removeEventListener('timeupdate', updateProgress);
            video.removeEventListener('play', () => setIsPlaying(true));
            video.removeEventListener('pause', () => setIsPlaying(false));
        };
    }, []);

    const togglePlay = () => {

        toggleComments(false);

        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    // Subscribe Action

    const dispatch = useDispatch();


    const subscribe = () => {
        setIsSubscribed(!isSubscribed);
        dispatch(subscribeChannel(data.channel.id));
        
    }

    const toggleComments = (state) => {
        state = state ?? !showComments;

        setShowComments(state)
    }


    const reactShort = () => {

        let short = data.id;
        
        dispatch(reactOnShort(short));
        
        setIsReacted(o => !o);

        setReactionCount((o) => isReacted ? o + -1 : o + 1 );
    }

    return (
        <div className="shorts-container">
            <div className="shorts-player-container" onClick={togglePlay}>
                <video
                    ref={videoRef}
                    className="shorts-player"
                    loop
                    src={utils.videosStorage + data.video}
                    poster={utils.storage + data.cover}
                />
                
                {!isPlaying && (
                    <div className="shorts-play-button">
                        <Icon icon="play" size={24} />
                    </div>
                )}
            </div>

            <div className="shorts-progress-container">
                <div className="shorts-progress-bar" style={{ width: `${progress}%` }} />
            </div>

            <div className="shorts-side-controls">
                <div className={`shorts-control`} onClick={reactShort}>
                    <Icon icon="thumbs-up" size={24} filled={isReacted}/>
                    <span className="shorts-control-count">{ reactionCount }</span>
                </div>
                
                <div className="shorts-control">
                    <Icon icon="thumbs-down" size={24} />
                </div>
                
                <div className="shorts-control" onClick={toggleComments}>
                    <Icon icon="chat" size={24} />
                    <span className="shorts-control-count">{data.comments_count}</span>
                </div>
                
                <div className="shorts-control">
                    <Icon icon="share" size={24} />
                </div>
                
                <div className="shorts-control">
                    <Icon icon="dots-three-outline" size={24} />
                </div>
            </div>

            <div className="shorts-bottom-info">
                <div className="shorts-channel-info">
                    <Avatar 
                        src={data.channel.profile_photo ?? '/user.png'} 
                        className="shorts-channel-avatar"
                        
                        onClick={() => go(`/channel/${data.channel.username}`)}
                    />
                    <span className="shorts-channel-name"
                    >{data.channel.name}</span>
                    {data.channel.id != currentUser.id && 
                    <Button 
                        variant="contained" 
                        size="small" 
                        className="shorts-subscribe-btn"
                        onClick={subscribe}
                    >
                           
                        {isSubscribed ? 'Unsubscribe' : 'subscribe'}
                    </Button>}
                </div>
                
                <p className="shorts-title">{data.title}</p>
                <p className="shorts-views">{data.views_count} views</p>
            
            


            </div>

            <div className={`short-comments ${showComments ? '' : 'hidden'}`}>
                <Comments comments={comments} setComments={setComments} type='short' videoId={data.id}/>
            </div>

            



        </div>
    );
};