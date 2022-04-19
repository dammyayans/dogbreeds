import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from 'store/actionTypes/authTypes';

const initialState: AuthState = {
  isAuth: false,
  loading: false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, loading: true};
    case LOGIN_SUCCESS:
      return {...state, loading: false, isAuth: true, user: action.payload};
    case LOGOUT:
      return {...state, isAuth: false, user: null};
    default:
      return state;
  }
};
