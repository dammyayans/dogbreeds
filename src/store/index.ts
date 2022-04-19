import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import reducer from './reducers';

// const preloadedState = {
//   auth: {
//     loading: false,
//     isAuth: !userDataFromStorage ? true : false,
//     user: userDataFromStorage,
//   },
//   dashboard: {
//     loading: false,
//     error: '',
//     breeds: [],
//     filteredBreeds: null,
//     favorites: [],
//   },
//   breed: {
//     loading: false,
//     error: '',
//     image: '',
//     subBreedLoading: false,
//     subBreedImages: [],
//   },
// };

const store = configureStore({
  reducer,
  // preloadedState,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
