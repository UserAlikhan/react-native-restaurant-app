import { configureStore } from '@reduxjs/toolkit';
import barsReducer from './slices/barSlice';
import selectedBarReducer from './slices/selectedBarSlice';
import locationReducer from './slices/locationSlice';
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    bars: barsReducer,
    selectedBar: selectedBarReducer,
    location: locationReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;