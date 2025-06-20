import { Container } from '@mui/material';
import  { useState } from 'react';
import { useUser } from '../contexts/User';
import '../styles/Channel.css'; 
import Videos from './Videos';
const Channel = ({profile}) => {
  const [activeTab, setActiveTab] = useState('home');

  let user = useUser(); // Only In Profile


  return   (
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
  );
};

export default Channel;