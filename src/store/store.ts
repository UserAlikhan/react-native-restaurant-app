import { configureStore } from '@reduxjs/toolkit';
import barsReducer from './slices/barSlice';
import selectedBarReducer from './slices/selectedBarSlice';
import locationReducer from './slices/locationSlice';

export const store = configureStore({
  reducer: {
    bars: barsReducer,
    selectedBar: selectedBarReducer,
    location: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;