import './suggestedProfiles.css';

import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../store/store';

const SuggestedProfiles = () => {
  const { photos }: { photos: any } = useSelector(
    (state: RootState) => state.newsFeed
  );
  return (
    <div className="sp01Container">
      <div>Suggested profiles</div>
      <div className="sp01ProfileList">
        {photos.length &&
          photos.map((photo: any) => {
            const user = photo.user;
            return (
              <Link to={`/profile/${user.username}`}>
                <div className="sp01ProfileCard">
                  <img
                    src={user.profile_image.medium || ""}
                    alt={user.name || ""}
                    className="sp01ProfileImage"
                  />
                  <div className="sp01ProfileInfo">
                    <div>{user.username}</div>

                    <div>
                      <i className="fi-rr-paper-plane flaticon"></i>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default SuggestedProfiles;
