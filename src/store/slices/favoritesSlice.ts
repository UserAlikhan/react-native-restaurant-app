import { BarResponse } from "@app/types/apiResponseTypes";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
    favoritesIds: number[],
    favoritesBars: BarResponse[],
}

const initialState: FavoritesState = {
    favoritesIds: [],
    favoritesBars: [],
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavoritesIds: (state, action: PayloadAction<number[]>) => {
            state.favoritesIds = action.payload;
            state.favoritesBars = state.favoritesBars;
        },
        setFavoritesBars: (state, action: PayloadAction<BarResponse[]>) => {
            state.favoritesIds = state.favoritesIds;
            state.favoritesBars = action.payload;
        },
        addFavoriteBar: (state, action: PayloadAction<BarResponse>) => {
            state.favoritesIds = [...state.favoritesIds, action.payload.id]
            state.favoritesBars = [...state.favoritesBars, action.payload]
        },
        removeFavoriteBar: (state, action: PayloadAction<number>) => {
            state.favoritesIds = state.favoritesIds.filter(id => id !== action.payload)
            state.favoritesBars = state.favoritesBars.filter(bar => bar.id !== action.payload)
        }
    }
})

export const { setFavoritesIds, setFavoritesBars, addFavoriteBar, removeFavoriteBar } = favoritesSlice.actions;
export default favoritesSlice.reducer;
