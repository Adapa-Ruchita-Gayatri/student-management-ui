import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { globalReducer } from './slices';


export const rootReducer = combineReducers({
  globalData: globalReducer
})



export const store = configureStore({
  reducer: rootReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;