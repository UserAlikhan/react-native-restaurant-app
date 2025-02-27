import * as Location from "expo-location";
import axios from "axios";
import { BarResponse } from "@app/types/apiResponseTypes";
import constants from "@app/constants/constants";

export const getNearestBars = async (
    location: Location.LocationObject
): Promise<BarResponse[]> => {
    const { latitude, longitude } = location.coords;

    try {
        const response = await axios.post(
            `${constants.API_URL}/bars/nearestToYou`,
            {
                latitude,
                longitude,
            },
            {
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        // const fakeImagesTemporarily = [
        //     {
        //         id: 1,
        //         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6C90CIMJgb6P25VLZTA2x7oZm10J0E8Mlbw&s",
        //         bar_id: 1,
        //     },
        //     {
        //         id: 2,
        //         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqQV0sM2Oyix5i9bw6kGk5oPgRT2VhSc61Q&s",
        //         bar_id: 1,
        //     },
        //     {
        //         id: 3,
        //         url: "https://media-cdn.tripadvisor.com/media/photo-s/0b/43/14/0f/20160513-152127-largejpg.jpg",
        //         bar_id: 1,
        //     },
        // ];

        // return {
        //     ...response.data,
        //     images: fakeImagesTemporarily,
        // } as BarResponse[];
        return response.data as BarResponse[];
    } catch (error) {
        console.error("Error fetching nearest bars:", error);
        throw error;
    }
};

export const getAllBars = async (): Promise<BarResponse[]> => {
    try {
        const response = await axios.get(`${constants.API_URL}/bars`, {
            timeout: 10000,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        return response.data as BarResponse[];

    } catch (error) {
        console.error("Error fetching all bars:", error);
        if (axios.isAxiosError(error)) {
            console.error('Request config:', error.config);
            console.error('Response:', error.response);
        }
        throw error;
    }
};