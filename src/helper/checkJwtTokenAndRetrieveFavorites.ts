import { setFavoritesBars } from "@app/store/slices/favoritesSlice"
import AsyncStorage from "@react-native-async-storage/async-storage"
import isTokenValid from "./isTokenValid"
import { jwtDecode } from "jwt-decode"
import { getUserFavoriteBars, getUserFavoritesIds } from "@app/apiRequests/favoritesCalls"
import { setFavoritesIds } from "@app/store/slices/favoritesSlice"
import { Dispatch } from "@reduxjs/toolkit"

const checkJwtTokenAndRetrieveFavorites = async (dispatch: Dispatch, favoritesIds: number[]) => {
    const jwtToken = await AsyncStorage.getItem('jwtToken')
    if (jwtToken && isTokenValid(jwtToken) && !favoritesIds.length) {
        console.log('No favorites found, retrieving favorites')
        const decodedToken = jwtDecode(jwtToken)
        const favoritesIds = await getUserFavoritesIds(Number(decodedToken.sub), jwtToken)
        const favoritesBars = await getUserFavoriteBars(Number(decodedToken.sub), jwtToken)
        dispatch(setFavoritesIds(favoritesIds))
        dispatch(setFavoritesBars(favoritesBars))
    }
}

export default checkJwtTokenAndRetrieveFavorites