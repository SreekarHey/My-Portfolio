import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// Reducers
import app from './app/appSlice';

const rootReducer = combineReducers({
  app,
});

const store = configureStore({ devTools: true, reducer: rootReducer });

export default store;
export type ReduxType = ReturnType<typeof rootReducer>;
