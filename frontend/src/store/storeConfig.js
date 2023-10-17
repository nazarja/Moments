import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import userReducer from './slices/userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: [thunk]
});

export const persistor = persistStore(store);

/*
 Uncomment the line below to clear the persisted state,
 Comment it out to persist the state
 Note: This is for development purposes only
*/
// persistor.purge();