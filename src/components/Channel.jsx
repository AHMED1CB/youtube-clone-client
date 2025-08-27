import { Container } from '@mui/material';
import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../contexts/User';
import { setChannel } from '../features/channel/channelSlice';
import { loadChannel, subscribeChannel } from '../features/channel/ChannelServices';
import '../styles/Channel.css'; 
import Loading from './Loading';
import ChannelShorts from './ChannelShorts';

import Videos from './Videos';
const Channel = () => {

    const dispatch = useDispatch();
    
    const go = useNavigate();
    
    const channel =  useSelector(state => state.channel.channel);
    
    const [isSubscribed , setIsSubscribed] = useState(false);

    const isLoading =  useSelector(state => state.channel.isLoading);
    
    const [activeTab, setActiveTab] = useState('videos');

    const profileUser = useUser();

    const [user , setUser] = useState(null);
    
    let {channelUsername} = useParams();   


   useEffect(() => {

        if (channelUsername == profileUser.username){
            go('/profile')
        }

        if (channel && channel.username == channelUsername){
            
            setIsSubscribed(channel.is_subscribed);

            setUser(channel)


        }else{
            dispatch(loadChannel(channelUsername));
        }



   }, [channel])


   function subscriberChannel(){
    
        dispatch(subscribeChannel(channel.id));

        dispatch(setChannel({...channel , is_subscribed: !channel.is_subscribed}));
        
        setIsSubscribed(channel.is_subscribed);

   }


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
                <button className={`subscribe-button`} disabled={isLoading} onClick={subscriberChannel}>
                    {isSubscribed ? 'UNSUBSCRIBE' : 'SUBSCRIBE'}
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
            {activeTab == 'videos' ? (user.videos.length > 0 && 
                <Videos videos={user.videos}  channel={user} /> || <h2 className="heading">No Videos Yet</h2>
            ) : (
                activeTab == 'shorts' ? (
                    user.shorts.length > 0 && <ChannelShorts shorts={user.shorts}/> || <h2 className="heading">No Shorts Yet</h2>

                ) :  (<div className="about">
                        <span className="channel-meta">Username: {user.username}</span>
                        <span className="channel-meta">Full Name: {user.name}</span>
                        <span className="channel-meta">Email: {user.email}</span>
                        <span className="channel-meta">Subscribers Count : {user.subscribers_count}</span>
                        <span className="channel-meta">Videos Count : {user.videos_count}</span>
                      </div>))
            }
        </Container>
      
      </main>
  ) || isLoading && <Loading/> ||  <h2 className="heading">User Not Found</h2>
};

export default Channel;
