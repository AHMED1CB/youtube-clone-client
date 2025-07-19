import React from 'react';
import { utils } from '../app/utils';
import '../styles/Comments.css'
import CreateComment from './CreateComment';
import Icon from './Icon'
const Comments = ({ comments  , setComments , videoId ,  type = 'video' }) => {
    

  return (
    <div className="comments-container">
      <h3 className="comments-title">Comments ({comments.length})</h3>

        <CreateComment setComments={setComments} videoId={videoId} type={type}/>
      
      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img 
              src={comment.commentor.profile_photo ? utils.storage + comment.commentor.profile_photo : '/user.png'   } 
              alt={comment.commentor.username} 
              className="comment-avatar"
            />

            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-author">{comment.commentor.username}</span>
                <span className="comment-time">{comment.creation_date}</span>
              </div>

              <p className="comment-text">{comment.comment}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;