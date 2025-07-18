import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUser } from '../contexts/User';
import { commentOnVideo } from '../features/videos/VideosSlice';
import Icon from './Icon';

const CreateComment = ({setComments , videoId}) => {
    const [comment , setComment] = useState('') 
    
    const user = useUser();

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            let newComment = {
                comment,
                commentor:user,
                id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
                video: videoId
            }

            setComments(old => {
                return [...old , newComment]
            })
            setComment('');
            
            dispatch(commentOnVideo(newComment))
            
        
        }
  };

  return (
    <div className="comment-input-container">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="comment-input"
          />
          <button 
            type="submit" 
            className="submit-btn"
            disabled={!comment.trim()}
          >
            <Icon icon="chat" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateComment;