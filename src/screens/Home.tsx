import { StyleSheet, View } from "react-native";
import HeaderTemplate from "../components/templates/HeaderTemplate";
import SearchComponent from "@app/components/homePageComponents/SearchComponent";
import RecomendationsComponent from "@app/components/homePageComponents/RecomendationsComponent";
import { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { BarResponse } from "@app/types/apiResponseTypes";
import { getAllBars, getNearestBars } from "@app/apiRequests/barCalls";
import { useAppDispatch } from "@app/store/hooks";
import { setAllBars, setNearestBars } from "@app/store/slices/barSlice";

export default function Home() {

    const dispatch = useAppDispatch()
    const [location, setLocation] = useState<Location.LocationObject | null>(null)

    const getNearestBarsAsync = async (location: Location.LocationObject) => {
        const nearestBars: BarResponse[] = await getNearestBars(location);
        dispatch(setNearestBars(nearestBars));
    }

    const getAllBarsAsync = async () => {
        const allBars: BarResponse[] = await getAllBars();
        dispatch(setAllBars(allBars));
    }

    useEffect(() => {
        getAllBarsAsync();
    }, [])

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            if (currentLocation) {
                setLocation(currentLocation);
                getNearestBarsAsync(currentLocation);
            }
        })();
    }, [location]);

    return (
        <HeaderTemplate>
            <View style={styles.container}>
                <View style={styles.searchComponent}>
                    <SearchComponent />
                </View>
                <RecomendationsComponent title={"Most Popular"} />
                {location && <RecomendationsComponent title={"Nearest to you"} />}
            </View>
        </HeaderTemplate>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    searchComponent: {
        marginVertical: 35,
    }
})