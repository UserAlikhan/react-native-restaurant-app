import * as Location from 'expo-location';
import axios from 'axios';
import { BarResponse } from '@app/types/apiResponseTypes';
import constants from '@app/constants/constants';
import data from '@app/data/mockData';

export const getNearestBars = async (location: Location.LocationObject): Promise<BarResponse[]> => {
    const { latitude, longitude } = location.coords;

    try {
        const response = await axios.post(
            `${constants.API_URL}/bars/nearestToYou`,
            {
                latitude,
                longitude
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log('response ', response.data) 

        return response.data as BarResponse[];
    } catch (error) {
        console.error('Error fetching nearest bars:', error);
        throw error;
    }
}

export const getAllBars = async (): Promise<BarResponse[]> => {
    try {
        const response = await axios.get(`${constants.API_URL}/bars`);
        return response.data as BarResponse[];
    } catch (error) {
        console.error('Error fetching all bars:', error);
        throw error;
    }
}