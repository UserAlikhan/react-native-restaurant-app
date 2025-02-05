import { useAppDispatch } from "@app/store/hooks";
import { RootState } from "@app/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as Location from "expo-location";
import { setLocation } from "@app/store/slices/locationSlice";

export const useGetLocationHook = () => {

    const dispatch = useAppDispatch();
    const location = useSelector((state: RootState) => state.location.location);

    useEffect(() => {
        const getLocation = async () => {
            // If location already exists, do not try to get it again
            if (location) return location;

            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                    console.log("Permission to access location was denied");
                    return;
                }

                let currentLocation = await Location.getCurrentPositionAsync({});
                if (currentLocation) {
                    dispatch(setLocation(currentLocation));
                }
            } catch (error) {
                console.error("Error getting location: ", error);
            }
        }

        getLocation();
    }, []);

    return { location };
}