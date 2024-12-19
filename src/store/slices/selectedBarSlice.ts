import { BarResponse } from "@app/types/apiResponseTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BarState {
    selectedBar: BarResponse | null
}

const initialState: BarState = {
    selectedBar: null
}

const selectedBarSlice = createSlice({
    name: 'selectedBar',
    initialState,
    reducers: {
        setSelectedBar: (state, action: PayloadAction<BarResponse>) => {
            state.selectedBar = action.payload
        },
        resetSelectedBar: (state) => {
            state.selectedBar = null
        }
    }
})

export const { setSelectedBar, resetSelectedBar } = selectedBarSlice.actions;
export default selectedBarSlice.reducer;