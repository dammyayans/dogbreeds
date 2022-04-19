import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {breedInfoReducer, homeReducer} from './dashboardReducer';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistAuthConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorites'],
};

export default combineReducers({
  auth: persistReducer(persistAuthConfig, authReducer),
  dashboard: persistReducer(persistConfig, homeReducer),
  breed: breedInfoReducer,
});
