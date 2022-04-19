import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import reducer from './reducers';

const userDataFromStorage = null;
const preloadedState = {
  auth: {
    loading: false,
    isAuth: !userDataFromStorage ? true : false,
    user: userDataFromStorage,
  },
  //   dashboard: {},
};

const store = configureStore({reducer, preloadedState});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
