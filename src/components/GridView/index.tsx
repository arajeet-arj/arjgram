import './gridView.css';

import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getUserNextPhotos } from '../../store/actions/user';
import { RootState } from '../../store/store';
import Loader from '../common/Loader';

const GridView = ({ photos }: { photos: any }) => {
  const { hasMorePhotos, nextPhotosLoading } = useSelector(
    (state: RootState) => state.user
  );
  const profile = useLocation().pathname.split("/")[2];
  const dispatch = useDispatch();
  console.log(hasMorePhotos, "Has more");

  const getMorePhotos = () => {
    setTimeout(() => {
      if (!nextPhotosLoading) dispatch(getUserNextPhotos(profile));
    }, 2000);
  };
  return (
    <div className="gv01Container">
      <InfiniteScroll
        pageStart={0}
        loadMore={getMorePhotos}
        hasMore={hasMorePhotos}
        loader={<Loader />}
      >
        {photos.map((photo: any) => (
          <div className="gv01PhotoContainer">
            <img
              className="gc01GridPhoto"
              src={photo.urls.regular || ""}
              alt={photo.alt_description || ""}
            />
            <div className="gc01PhotoOverlay">
              <div className="gc01PhotoOverlayStat">
                <i className="fi-rr-heart flaticon"></i> {photo.likes}
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default GridView;
