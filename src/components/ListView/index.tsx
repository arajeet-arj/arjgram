import './listView.css';

import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useLocation } from 'react-router-dom';

import { PhotoListType } from '../../constants/types';
import { fetchInfinitePhotos } from '../../store/actions/newsFeed';
import { getUserNextPhotos } from '../../store/actions/user';
import { RootState } from '../../store/store';
import Loader from '../common/Loader';
import ListPhoto from './ListPhoto';

const ListView = ({
  photos,
  user,
}: {
  photos: PhotoListType;
  user: boolean;
}) => {
  const { error } = useSelector((state: RootState) => state.newsFeed);
  const { nextPhotosLoading, hasMorePhotos } = useSelector(
    (state: RootState) => state.user
  );

  const profile = useLocation().pathname.split("/")[2];
  const dispatch = useDispatch();
  const getMorePhotos = () => {
    if (user) {
      if (!nextPhotosLoading) dispatch(getUserNextPhotos(profile));
    } else {
      if (!error) dispatch(fetchInfinitePhotos());
    }
  };
  return (
    <div className="lv01Container">
      {user ? (
        <InfiniteScroll
          pageStart={0}
          loadMore={getMorePhotos}
          hasMore={hasMorePhotos}
          loader={<Loader />}
        >
          {photos.map((photo, index) => {
            return (
              <div className="lv01ListPhoto">
                <ListPhoto photo={photo} />
              </div>
            );
          })}
        </InfiniteScroll>
      ) : (
        <InfiniteScroll
          pageStart={0}
          loadMore={getMorePhotos}
          hasMore={true}
          loader={<Loader />}
        >
          {photos.map((photo, index) => {
            return (
              <div className="lv01ListPhoto">
                <ListPhoto photo={photo} />
              </div>
            );
          })}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default ListView;
