import { configureStore } from '@reduxjs/toolkit';
import barsReducer from './slices/barSlice';
import selectedBarReducer from './slices/selectedBarSlice';

export const store = configureStore({
  reducer: {
    bars: barsReducer,
    selectedBar: selectedBarReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;