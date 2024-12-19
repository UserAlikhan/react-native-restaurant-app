import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BarResponse } from '@app/types/apiResponseTypes';

interface BarsState {
  nearestBars: BarResponse[];
  allBars: BarResponse[];
}

const initialState: BarsState = {
  nearestBars: [],
  allBars: [],
};

const barsSlice = createSlice({
  name: 'bars',
  initialState,
  reducers: {
    setNearestBars: (state, action: PayloadAction<BarResponse[]>) => {
      state.nearestBars = action.payload;
    },
    setAllBars: (state, action: PayloadAction<BarResponse[]>) => {
      state.allBars = action.payload;
    },
  },
});

export const { setNearestBars, setAllBars } = barsSlice.actions;
export default barsSlice.reducer;