import axios from "axios";
import constants from "@app/constants/constants";
import { BarResponse, FavoriteBarResponse } from "@app/types/apiResponseTypes";

export const addToFavorites = async (user_id: number, bar_id: number, token: string): Promise<BarResponse> => {
    try {
        // execute addToFavorites
        const response = await axios.post(`${constants.API_URL}/favorites/`, {
            user_id: user_id,
            bar_id: bar_id,
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        return response.data;
    } catch (error) {
        console.error("Error adding to favorites:", error);
        throw error;
    }
};

export const getUserFavoritesIds = async (user_id: number, token: string): Promise<number[]> => {
    try {
        // execute getUserFavorites
        const response = await axios.get(`${constants.API_URL}/favorites/user/${user_id}/ids`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        return response.data;
    } catch (error) {
        console.error("Error getting user favorites:", error);
        throw error;
    }
}

export const getUserFavoriteBars = async (user_id: number, token: string): Promise<FavoriteBarResponse[]> => {
    try {
        // execute getUserFavorites
        const response = await axios.get(`${constants.API_URL}/favorites/user/${user_id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        return response.data;
    } catch (error) {
        console.error("Error getting user favorites:", error);
        throw error;
    }
}

export const removeFromFavorites = async (user_id: number, bar_id: number, token: string): Promise<void> => {
    try {
        // execute removeFromFavorites
        const response = await axios.delete(`${constants.API_URL}/favorites/${user_id}/${bar_id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        return response.data
    } catch (error) {
        console.error("Error removing from favorites:", error);
        throw error;
    }
}