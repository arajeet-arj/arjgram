import React, { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useLocation } from 'react-router-dom';

import ErrorShown from '../../components/common/ErrorShown';
import Loader from '../../components/common/Loader';
import ProfileInfo from '../../components/ProfileInfo';
import ProfilePhotos from '../../components/ProfilePhotos';
import {
  fetchUserData,
  fetchUserPhotos,
} from '../../store/actions/user';
import { RootState } from '../../store/store';

const Profile = () => {
  const profile = useLocation().pathname.split("/")[2];
  const { userError, userLoading, userPhotoError, userPhotoLoading } =
    useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData(profile));
    dispatch(fetchUserPhotos(profile));
  }, []);
  return userLoading || userPhotoLoading ? (
    <div className="groww-container">
      <Loader />
    </div>
  ) : userPhotoError || userError ? (
    <div className="groww-container">
      <ErrorShown />
    </div>
  ) : (
    <div className="groww-container">
      <ProfileInfo />
      <ProfilePhotos />
    </div>
  );
};

export default Profile;
