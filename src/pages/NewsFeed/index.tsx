import './newsFeed.css';

import React, { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import ErrorShown from '../../components/common/ErrorShown';
import Loader from '../../components/common/Loader';
import ListView from '../../components/ListView';
import SuggestedProfiles from '../../components/SuggestedProfiles';
import { PhotoListType } from '../../constants/types';
import { fetchRandomPhotos } from '../../store/actions/newsFeed';
import { clearUser } from '../../store/actions/user';
import { RootState } from '../../store/store';

const NewsFeed = () => {
  const {
    photos,
    initialError,
    initialLoading,
  }: { photos: PhotoListType; initialError: boolean; initialLoading: boolean } =
    useSelector((state: RootState) => state.newsFeed);
  const dispatch = useDispatch();
  console.log("Initial Erorr", initialError);

  useEffect(() => {
    dispatch(fetchRandomPhotos());
    dispatch(clearUser());
  }, []);

  return initialLoading ? (
    <div className="groww-container nf01Container">
      <Loader />
    </div>
  ) : initialError ? (
    <div className="groww-container nf01Container">
      <ErrorShown />
    </div>
  ) : (
    <div className="groww-container nf01Container">
      <div className="nf01ListContainer">
        <ListView photos={photos} user={false} />
      </div>

      <SuggestedProfiles />
    </div>
  );
};

export default NewsFeed;
