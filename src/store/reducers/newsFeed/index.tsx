import {
  FETCH_INFINITE_PHOTOS_FAILURE,
  FETCH_INFINITE_PHOTOS_SUCCESS,
  FETCH_RANDOM_PHOTOS_FAILURE,
  FETCH_RANDOM_PHOTOS_SUCCESS,
} from '../../actionTypes/newsFeed';

const initialState: any = {
  initialPhotos: [],
  photos: [],
  initialLoading: true,
  loading: false,
  initialError: false,
  error: false,
};
export const newsFeedReducer = (
  state = initialState,
  action: { type: string; data?: any }
) => {
  switch (action.type) {
    case FETCH_RANDOM_PHOTOS_SUCCESS: {
      console.log("in success", action.data);

      return {
        ...state,
        initialLoading: false,
        photos: action.data,
        initialPhotos: action.data,
      };
    }
    case FETCH_RANDOM_PHOTOS_FAILURE: {
      return {
        ...state,
        initialError: true,
        initialLoading: false,
      };
    }
    case FETCH_INFINITE_PHOTOS_SUCCESS: {
      return {
        ...state,
        photos: [...state.photos, ...action.data],
      };
    }
    case FETCH_INFINITE_PHOTOS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
