import { API_URL } from '../../constants/defaults';
import {
  FETCH_INFINITE_PHOTOS_FAILURE,
  FETCH_INFINITE_PHOTOS_SUCCESS,
  FETCH_RANDOM_PHOTOS_FAILURE,
  FETCH_RANDOM_PHOTOS_SUCCESS,
} from '../actionTypes/newsFeed';

export const fetchRandomPhotos = () => async (dispatch: any) => {
  const url = API_URL.randomPhoto;
  try {
    const localData = JSON.parse(localStorage.getItem(url) || "{}");
    if (localData.createdAt) {
      dispatch({
        type: FETCH_RANDOM_PHOTOS_SUCCESS,
        data: localData.data,
      });
    } else {
      const res = await fetch(url);
      if (res.status === 200) {
        const data = await res.json();
        localStorage.setItem(
          url,
          JSON.stringify({
            createdAt: new Date(),
            data,
          })
        );
        dispatch({
          type: FETCH_RANDOM_PHOTOS_SUCCESS,
          data,
        });
      } else {
        dispatch({
          type: FETCH_RANDOM_PHOTOS_FAILURE,
        });
      }
    }
  } catch (error) {
    console.log(error, "err");
    dispatch({
      type: FETCH_RANDOM_PHOTOS_FAILURE,
    });
  }
};

export const fetchInfinitePhotos = () => async (dispatch: any) => {
  const url = API_URL.randomPhoto;
  try {
    const res = await fetch(url);
    if (res.status === 200) {
      const data = await res.json();
      dispatch({
        type: FETCH_INFINITE_PHOTOS_SUCCESS,
        data,
      });
    } else {
      dispatch({
        type: FETCH_INFINITE_PHOTOS_FAILURE,
      });
    }
  } catch (error) {
    dispatch({
      type: FETCH_INFINITE_PHOTOS_FAILURE,
    });
  }
};
