import {AxiosError} from 'axios';
import Toast from 'react-native-toast-message';
import {
  ALL_BREEDS_REQUEST,
  ALL_BREEDS_FAIL,
  ALL_BREEDS_SUCCESS,
  CLEAR_FILTER,
  FILTER_BREEDS,
  BREED_IMAGE_FAIL,
  BREED_IMAGE_REQUEST,
  BREED_IMAGE_SUCCESS,
  BREED_SUB_BREED_REQUEST,
  BREED_SUB_BREED_SUCCESS,
  CLEAR_BREED_INFO,
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from 'store/actionTypes/dashboardTypes';
import {getAllBreeds, getBreed, getSubBreed} from 'utils/api';

// Get all breeds
export const getBreeds = () => {
  return async dispatch => {
    dispatch({type: ALL_BREEDS_REQUEST});
    try {
      const res = await getAllBreeds();
      const newRes = res?.message;
      dispatch({
        type: ALL_BREEDS_SUCCESS,
        payload: newRes ? [...Object.entries(newRes)] : [],
      });
    } catch (_ex) {
      const ex = _ex as AxiosError;
      if (ex.response) {
        Toast.show({
          type: 'danger',
          text1: ex.response.data.errors,
        });
      } else {
        Toast.show({
          type: 'danger',
          text1: String(ex),
        });
      }
      dispatch({type: ALL_BREEDS_FAIL, payload: String(ex)});
    }
  };
};

//Reset all breeds state
export const clearFilteredBreeds = () => {
  return dispatch => {
    dispatch({type: CLEAR_FILTER});
  };
};

// Filter breeds
export const filterBreeds = filterParam => {
  return dispatch => {
    dispatch({type: FILTER_BREEDS, payload: filterParam});
  };
};

// Get all breeds
export const getBreedImage = (name: string) => {
  return async dispatch => {
    dispatch({type: BREED_IMAGE_REQUEST});
    try {
      const res = await getBreed(name);
      dispatch({
        type: BREED_IMAGE_SUCCESS,
        payload: res?.message,
      });
    } catch (_ex) {
      const ex = _ex as AxiosError;
      if (ex.response) {
        Toast.show({
          type: 'danger',
          text1: ex.response.data.errors,
        });
      } else {
        Toast.show({
          type: 'danger',
          text1: String(ex),
        });
      }
      dispatch({type: BREED_IMAGE_FAIL, payload: String(ex)});
    }
  };
};

// Get all breeds
export const getSubBreedImages = (name: string, subbreeds: string[]) => {
  return async dispatch => {
    dispatch({type: BREED_SUB_BREED_REQUEST});
    try {
      const requests = subbreeds.map(async subbreed => {
        const res = await getSubBreed(name, subbreed);
        return res?.message;
      });
      Promise.all(requests).then(res => {
        dispatch({
          type: BREED_SUB_BREED_SUCCESS,
          payload: res,
        });
      });
    } catch (_ex) {
      const ex = _ex as AxiosError;
      if (ex.response) {
        Toast.show({
          type: 'danger',
          text1: ex.response.data.errors,
        });
      } else {
        Toast.show({
          type: 'danger',
          text1: String(ex),
        });
      }
      dispatch({type: BREED_IMAGE_FAIL, payload: String(ex)});
    }
  };
};

export const clearBreedInfo = () => {
  return dispatch => {
    dispatch({type: CLEAR_BREED_INFO});
  };
};

export const updateFavorite = (type: 'remove' | 'add', value: string) => {
  return dispatch => {
    Toast.show({
      type: 'success',
      text1:
        type === 'add'
          ? `Added successfully to favorites`
          : `Removed successfully from favorites`,
    });
    dispatch({
      type: type === 'remove' ? REMOVE_FROM_FAVORITE : ADD_TO_FAVORITE,
      payload: value,
    });
  };
};
