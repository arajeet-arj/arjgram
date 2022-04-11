import { API_URL } from '../../constants/defaults';
import {
  CLEAR_USER,
  FETCH_USER_DATA_FAILURE,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_PHOTOS_FAILURE,
  FETCH_USER_PHOTOS_SUCCESS,
  GET_USER_NEXT_PHOTOS_FAILURE,
  GET_USER_NEXT_PHOTOS_SUCCESS,
  NEXT_PHOTO_LOADING,
} from '../actionTypes/user';

export const fetchUserData = (profile: string) => async (dispatch: any) => {
  const url = API_URL.userProfile(profile);
  try {
    const localData = JSON.parse(localStorage.getItem(url) || "{}");
    if (localData.createdAt) {
      dispatch({
        type: FETCH_USER_DATA_SUCCESS,
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
          type: FETCH_USER_DATA_SUCCESS,
          data,
        });
      } else {
        dispatch({
          type: FETCH_USER_DATA_FAILURE,
        });
      }
    }
  } catch (error) {
    dispatch({
      type: FETCH_USER_DATA_FAILURE,
    });
  }
};

export const fetchUserPhotos = (profile: string) => async (dispatch: any) => {
  const url = API_URL.userPhots(profile);
  try {
    const localData = JSON.parse(localStorage.getItem(url) || "{}");
    if (localData.createdAt) {
      dispatch({
        type: FETCH_USER_PHOTOS_SUCCESS,
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
          type: FETCH_USER_PHOTOS_SUCCESS,
          data,
        });
      } else {
        dispatch({
          type: FETCH_USER_PHOTOS_FAILURE,
        });
      }
    }
  } catch (error) {
    dispatch({
      type: FETCH_USER_PHOTOS_FAILURE,
    });
  }
};
const nextPhotoLoading = () => (dispatch: any) => {
  dispatch({
    type: NEXT_PHOTO_LOADING,
  });
};
export const getUserNextPhotos =
  (profile: string) => async (dispatch: any, getState: any) => {
    nextPhotoLoading();
    const url = API_URL.userPhotosNext(profile, getState().user.page + 1);
    try {
      const res = await fetch(url);
      if (res.status === 200) {
        const data = await res.json();

        dispatch({
          type: GET_USER_NEXT_PHOTOS_SUCCESS,
          data,
        });
      } else {
        dispatch({
          type: GET_USER_NEXT_PHOTOS_FAILURE,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_USER_NEXT_PHOTOS_FAILURE,
      });
    }
  };

export const clearUser = () => (dispatch: any) => {
  dispatch({
    type: CLEAR_USER,
  });
};
