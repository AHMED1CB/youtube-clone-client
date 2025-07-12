import { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { utils } from '../app/utils';
import { getVideo, reset } from '../features/videos/VideosSlice';
import '../styles/VideoPage.css';
import Loading from './Loading';
import Icon from './Icon';
import { useUser } from '../contexts/User';
import {subscribeChannel} from '../features/channel/ChannelSlice'

const VideoPage = () => {
  
  const video = useSelector(state => state.videos.video);

  const [relatedVideos , setRelatedVideos] = useState(null);

  const isLoading = useSelector(state => state.videos.isLoading);

  const dispatch = useDispatch()

  const {videoSlug} = useParams();

  const channelCover = video && video.channel.cover ?  utils.storage + video.channel?.cover : '/user.png'

  const go = useNavigate();

  const [isSubscribed , setIsSubscribed ] = useState(video?.channel?.is_subscribed || null); 
  
  const channelLoading = useSelector(state => state.channel.isLoading);
 const currentUser = useUser();

  useEffect(() => {

    if (!video || video.slug != videoSlug){
        // Get Video

        dispatch(reset());

        dispatch(getVideo(videoSlug))
        
    }

    if (video){
      setRelatedVideos(video.more_videos)
      setIsSubscribed(video.channel.is_subscribed)
    }

  } , [video , videoSlug])  

  const subscribe = () => {

    setIsSubscribed(o => !o);

    dispatch(subscribeChannel(video.channel.id))


  }
  

  return  video && video.slug == videoSlug && (
    <div className="video-page">
      <div className="video-container">
        <div className="video-player">
                <video src={utils.videosStorage + video?.video} autoPlay paused='true' poster={utils.storage + video.cover} controls></video> 
        </div>
        
        <div className="video-info">
          <h1 className="video-title">{video.title}</h1>
          
          <div className="video-meta">
            <div className="channel-info" >
              <div className="channel-avatar" onClick={() => go(`/channel/${video.channel.username}`)}>
                <img src={channelCover} alt={video.channel.name} onClick={() => go(`/channel/${video.channel.username}`)} />
              </div>
              <div className="channel-details">
                <h3 className="channel-name">{video.channel.name}</h3>
                <span className="subscribers">{video.channel.subscriber}</span>
              </div>
              {video.channel.id !== currentUser.id && 
                <button className="subscribe-btn" disabled={channelLoading} onClick={subscribe}>{isSubscribed ? 'Unsubscribe' : 'Subscribe'}</button>
               }
            </div>
            
            <div className="video-stats">
              <div className="views">{video.views_count} views</div>
              <div className="upload-date">{video.creation_date}</div>
              
              <div className="actions">
                
                <button className="action-btn like">
                <Icon icon="thumbs-up" /> {video.reactions_count}
                </button>

                <button className="action-btn like">
                <Icon icon="chat" /> {video.comments_count}
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="related-videos">
        <h3 className="related-title">Up next</h3>
        
        {relatedVideos && relatedVideos.map(relatedVideo => (
          <div className="related-video-card" onClick={() => go(`/videos/${relatedVideo.slug}`)} key={relatedVideo.id}>
            <div className="related-thumbnail">
              <img src={utils.storage + relatedVideo.cover} alt={relatedVideo.title} />
              <span className="duration">{relatedVideo.duration}</span>
            </div>
            <div className="related-info">
              <h4 className="related-video-title">{relatedVideo.title}</h4>
              <p className="related-channel">{relatedVideo.channel.name}</p>
              <p className="related-stats">{relatedVideo.views_count} • {relatedVideo.creation_date}</p>
            </div>
          </div>
        ))||<h2 className="heading">No More Vidoes</h2> }


      </div>
    </div>
  ) || (isLoading && <Loading/>) || (!video && !isLoading &&   <h2 className="heading">Invalid Video Url</h2>) ;
};

export default VideoPage;