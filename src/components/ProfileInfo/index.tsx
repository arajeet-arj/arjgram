import './profileInfo.css';

import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

const ProfileInfo = () => {
  const { user }: { user: any } = useSelector((state: RootState) => state.user);
  return (
    <div className="pi01Container">
      <div>
        <img
          src={user.profile_image.large}
          alt={user.name}
          className="pi01ProfilePhoto"
        />
      </div>
      <div className="pi01UserInfo">
        <div className="pi01Username">{user.username}</div>
        <div className="pi01UserStats">
          <div className="pi01UserStatItem">
            <i className="fi-rr-camera flaticon"></i>
            <span className="pi01UserStatFigure">{user.total_photos} </span>
            Photos
          </div>
          <div className="pi01UserStatItem">
            <i className="fi-rr-following flaticon"></i>
            <span className="pi01UserStatFigure">{user.followers_count}</span>
            Followers
          </div>
          <div className="pi01UserStatItem">
            <i className="fi-rr-users flaticon"></i>
            <span className="pi01UserStatFigure">{user.following_count}</span>
            Following
          </div>
        </div>
        <div>
          <div className="pi01UserFullName">{user.name}</div>
          <div>
            <i>{user.bio}</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
