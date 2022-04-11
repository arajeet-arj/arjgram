import './listPhoto.css';

import React from 'react';

import moment from 'moment';
import { Link } from 'react-router-dom';

import { PhotoType } from '../../../constants/types';

const ListPhoto = ({ photo }: { photo: PhotoType }) => {
  return (
    <div className="lp01Container">
      <div className="lp01ProfileContainer">
        <Link to={`/profile/${photo.user.username}`}>
          <img
            src={photo.user.profile_image.large || ""}
            alt={photo.user.name || ""}
            className="lp01ProfilePhoto"
          />
        </Link>

        <div className="lp01NameLocation">
          <div className="lp01Username">{photo.user.username}</div>
          {photo.location && (
            <div className="lp01UserLocation">{photo.location.title}</div>
          )}
        </div>
      </div>
      <div>
        <img
          src={photo.urls.regular || ""}
          alt={photo.alt_description || ""}
          className="lp01Photo"
        />
      </div>
      <div>
        <div className="lp01Stats flex-end">
          <div className="lp01StatItem">
            <i className="fi-rr-eye flaticon"></i>
            {photo.views}
          </div>

          <div className="lp01StatItem">
            <i className="fi-rr-heart flaticon"></i>
            {photo.likes}
          </div>
          <div className="lp01StatItem">
            <i className="fi-rr-download flaticon"></i>
            {photo.downloads}
          </div>
        </div>
        <div>
          <span className="lp01Username">{photo.user.username}</span>{" "}
          <i className="lp01PhotoCaption">{photo.description}</i>
        </div>
        <div className="lp01Time">{moment(photo.updated_at).fromNow()}</div>
      </div>
    </div>
  );
};

export default ListPhoto;
