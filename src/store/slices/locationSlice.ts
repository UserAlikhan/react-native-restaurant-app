import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as Location from "expo-location";

interface LocationState {
    location: Location.LocationObject | null;
}

const initialState: LocationState = {
    location: null,
}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<Location.LocationObject>) => {
            state.location = action.payload;
        },
        resetLocation: (state) => {
            state.location = null;
        }
    }
})

export const { setLocation, resetLocation } = locationSlice.actions;
export default locationSlice.reducer;