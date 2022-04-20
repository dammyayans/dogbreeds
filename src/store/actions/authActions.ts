import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from 'store/actionTypes/authTypes';
import {postLogin} from 'utils/api';
import Toast from 'react-native-toast-message';

export const loginUser = userData => {
  return async dispatch => {
    dispatch({type: LOGIN_REQUEST});
    try {
      const {data} = await postLogin(userData);
      dispatch({type: LOGIN_SUCCESS, payload: data});
    } catch (ex: any) {
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
    }
  };
};

export const logoutUser = () => {
  return dispatch => {
    dispatch({type: LOGOUT});
  };
};
