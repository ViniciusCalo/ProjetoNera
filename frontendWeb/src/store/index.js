import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import userReducer from './userSlice';
import classroomReducer from './classroomSlice';
import trailsReducer from './trailsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'classrooms', 'trails']
};

const rootReducer = combineReducers({
  user: userReducer,
  classrooms: classroomReducer,
  trails: trailsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
