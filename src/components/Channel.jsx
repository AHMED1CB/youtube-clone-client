import { Container } from '@mui/material';
import  { useState } from 'react';
import '../styles/Channel.css'; 
import Videos from './Videos';
const ChannelPage = () => {
  const [activeTab, setActiveTab] = useState('home');


  return (
      <main className="channel-page">
        <Container>

            <div className="channel-header">
            <div className="channel-info">
                <div className="channel-avatar">
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="channel" />
                </div>
                <div className="channel-details">
                <h1>Ahmed Hassan</h1>
                <div className="channel-stats">
                    <span>@AHMED1cb</span>
                    <span>1.2M subscribers</span>
                    <span>120 videos</span>
                </div>
                </div>
            </div>
            <button className={`subscribe-button`}>
                SUBSCRIBE
            </button>
            </div>

            <div className="channel-tabs">
            <button 
                className={`channel-tab ${activeTab === 'home' ? 'active' : ''}`}
                
                onClick={() => setActiveTab('home')}
                
                >
                Home
            </button>
            <button 
                className={`channel-tab ${activeTab === 'videos' ? 'active' : ''}`}
                onClick={() => setActiveTab('videos')}
            >
                Videos
            </button>
            <button 
                className={`channel-tab ${activeTab === 'playlists' ? 'active' : ''}`}
                onClick={() => setActiveTab('playlists')}
            >
                Playlists
            </button>
            <button 
                className={`channel-tab ${activeTab === 'community' ? 'active' : ''}`}
                onClick={() => setActiveTab('community')}
            >
                Community
            </button>
            <button 
                className={`channel-tab ${activeTab === 'channels' ? 'active' : ''}`}
                onClick={() => setActiveTab('channels')}
            >
                Channels
            </button>
            <button 
                className={`channel-tab ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => setActiveTab('about')}
            >
                About
            </button>
            </div>

            <Videos/>
        </Container>
      
      </main>
  );
};

export default ChannelPage;