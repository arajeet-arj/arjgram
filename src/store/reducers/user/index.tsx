import {
  CLEAR_USER,
  FETCH_USER_DATA_FAILURE,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_PHOTOS_FAILURE,
  FETCH_USER_PHOTOS_SUCCESS,
  GET_USER_NEXT_PHOTOS_FAILURE,
  GET_USER_NEXT_PHOTOS_SUCCESS,
  NEXT_PHOTO_LOADING,
} from '../../actionTypes/user';

const initialState: any = {
  user: null,
  userPhotos: [],
  userLoading: true,
  userError: false,
  userPhotoLoading: true,
  userPhotoError: false,
  page: 1,
  nextPhotoError: false,
  hasMorePhotos: false,
  nextPhotosLoading: false,
};
export const userReducer = (
  state = initialState,
  action: { type: string; data?: any }
) => {
  switch (action.type) {
    case FETCH_USER_DATA_SUCCESS: {
      return {
        ...state,
        user: action.data,
        userLoading: false,
      };
    }
    case FETCH_USER_DATA_FAILURE: {
      return {
        ...state,
        userLoading: false,
        userError: true,
      };
    }
    case FETCH_USER_PHOTOS_SUCCESS: {
      return {
        ...state,
        userPhotos: action.data,
        userPhotoLoading: false,
        hasMorePhotos: state.user
          ? state.user.total_photos > 10
            ? true
            : false
          : true,
        page: 1,
      };
    }
    case FETCH_USER_PHOTOS_FAILURE: {
      return {
        ...state,
        userPhotoLoading: false,
        userPhotoError: true,
      };
    }
    case NEXT_PHOTO_LOADING: {
      return {
        ...state,
        nextPhotosLoading: true,
      };
    }
    case GET_USER_NEXT_PHOTOS_SUCCESS: {
      return {
        ...state,
        userPhotos: [...state.userPhotos, ...action.data],
        page: state.page + 1,
        hasMorePhotos:
          state.user.total_photos > 10 * (state.page + 1) ? true : false,
        nextPhotosLoading: false,
      };
    }
    case GET_USER_NEXT_PHOTOS_FAILURE: {
      return {
        ...state,
        nextPhotoError: true,
        nextPhotosLoading: false,
      };
    }
    case CLEAR_USER: {
      return {
        ...state,
        user: null,
        userPhotos: [],
        userLoading: true,
        userError: false,
        userPhotoLoading: true,
        userPhotoError: false,
        page: 1,
        nextPhotoError: false,
        hasMorePhotos: false,
        nextPhotosLoading: false,
      };
    }
    default:
      return state;
  }
};
