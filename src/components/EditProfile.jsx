import React from 'react';
import { utils } from '../app/utils';
import { useUser } from '../contexts/User';
import '../styles/EditProfile.css';

const EditProfile = () => {


  const user = useUser();


  const userPhoto = user.profile_photo ? utils.storage + user.profile_photo : '/user.png'

  return (
    <div className="profile-edit-page">
      <div className="profile-header">
        <h2 className="heading">Edit Profile</h2>
      </div>

      <div className="profile-content">
        <div className="avatar-section">
          <div className="avatar-container">
            <label  htmlFor="avatar_file">
            <img 
              src={userPhoto} 
              alt="Profile" 
              className="profile-avatar"
            />
            </label>
              <input id="avatar_file" type="file" className="avatar-upload-input" />
          </div>
        </div>

        <form className="profile-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              defaultValue={user.name}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Username</label>

            <input
              placeholder="Username"
              type="text"
              id="username"
              defaultValue={user.username}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              placeholder="Email"
              type="email"
              id="email"
              defaultValue="john@example.com"
              className="form-input"
              disabled
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;