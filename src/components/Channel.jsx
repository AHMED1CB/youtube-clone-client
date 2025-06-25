import { Container } from '@mui/material';
import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../contexts/User';
import { loadChannel } from '../features/channel/channelSlice';
import '../styles/Channel.css'; 
import Loading from './Loading';

import Videos from './Videos';
const Channel = ({profile}) => {

    const dispatch = useDispatch();
    const go = useNavigate();
    const channel =  useSelector(state => state.channel.channel);
    const isLoading =  useSelector(state => state.channel.isLoading);
    
    const [activeTab, setActiveTab] = useState('home');

    const profileUser = useUser();

    const [user , setUser] = useState(null);
    
    const {channelUsername} = useParams();   

    if (!profile && (profileUser.username == channelUsername)){
        go('/profile')
    }



   useEffect(() => {

    if (profile){
        setUser(profileUser);
    }else{
        // get User By Slug
        if (channel){

            setUser(channel)
        }else{
            dispatch(loadChannel(channelUsername));
        }


    }

   }, [channel])




  return user && !isLoading && ( 
        <main className="channel-page">
        <Container>

            <div className="channel-header">
            <div className="channel-info">
                <div className="channel-avatar">
                <img src={user.profile_photo ? user.profile_photo : '/user.png' } alt="channel" />
                </div>
                <div className="channel-details">
                <h1>{user.name}</h1>
                <div className="channel-stats">
                    <span>@{user.username}</span>
                    <span>{user.subscribers_count} subscribers</span>
                    <span>{user.videos_count} videos</span>
                </div>
                </div>
            </div>
            {
                !profile && 
                <button className={`subscribe-button`}>
                    SUBSCRIBE
                </button>
            }
            </div>

            <div className="channel-tabs">
            <button 
                className={`channel-tab ${activeTab === 'videos' ? 'active' : ''}`}
                onClick={() => setActiveTab('videos')}
            >
                Videos
            </button>
            
            <button 
                className={`channel-tab ${activeTab === 'shorts' ? 'active' : ''}`}
                onClick={() => setActiveTab('shorts')}
            >
                Shorts
            </button>
            

            <button 
                className={`channel-tab ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => setActiveTab('about')}
            >
                About
            </button>
            </div>

            {user.videos_count > 0 && 
                <Videos videos={user.videos}/> || 
                
                <h2 className="heading">No Videos Yet</h2>
            }
        </Container>
      
      </main>
  ) || (isLoading && <Loading/>) || <h2 className="heading">User Not Found</h2>
};

export default Channel;