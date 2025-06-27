import { Container } from '@mui/material';
import { useUser } from '../contexts/User';
import '../styles/Channel.css'; 

import { useState } from 'react' 
import Videos from './Videos';
import ChannelShorts from './ChannelShorts';

const Profile = () => {

    
    const [activeTab, setActiveTab] = useState('videos');

    const user = useUser();


  return  ( 
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
                <Videos videos={user.videos}/> || <h2 className="heading">No Videos Yet</h2>
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
  )
};

export default Profile;