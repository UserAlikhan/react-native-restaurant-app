import { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import MarkerComponent from "@app/components/mapComponents/MarkerComponent";
import constants from "@app/constants/constants";
import BottomSheetModalComponent from "../bottomSheet/BottomSheetModalComponent";
import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { setSelectedBar } from "@app/store/slices/selectedBarSlice";
import { BarResponse } from "@app/types/apiResponseTypes";
import * as Location from "expo-location";
import MapPageSearchComponent from "../searchField/MapPageSearchComponent";
import { useGetFromStoreOrRetrieveAllBarsHook } from "@app/customHooks/useGetFromStoreOrRetrieveAllBarsHook";

const MapComponent = () => {

    const bottomSheetRef = useRef<BottomSheetModal | null>(null);
    const mapRef = useRef<MapView | null>(null);

    const { bars } = useGetFromStoreOrRetrieveAllBarsHook();
    const { selectedBar } = useAppSelector((state) => state.selectedBar);

    const dispatch = useAppDispatch();

    const [location, setLocation] = useState<Location.LocationObject | null>(
        null
    );

    const onRegionChange = (region: Region) => {
        console.log(region);
    };

    const onCalloutPressed = (bar: BarResponse) => {
        dispatch(setSelectedBar(bar));
        bottomSheetRef.current?.present();
    };

    const checkStatus = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            console.log("Permission to access location was denied");
            return false;
        }

        return true;
    };

    const goToUserLocation = async () => {
        if (!(await checkStatus())) return;

        if (!location) {
            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
        }

        if (location) {
            mapRef.current?.getCamera().then((camera) => {
                mapRef.current?.animateCamera({
                    center: {
                        latitude: constants.INITIAL_REGION.latitude,
                        longitude: constants.INITIAL_REGION.longitude,
                        // latitude: location?.coords.latitude,
                        // longitude: location?.coords.longitude,
                    },
                    zoom: 15,
                });
            });
        }
    };

    return (
        <View style={styles.container}>
            <MapPageSearchComponent
                bottomSheetRef={bottomSheetRef}
                mapRef={mapRef}
            />
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={constants.INITIAL_REGION}
                userInterfaceStyle="light"
                showsUserLocation={true}
                showsMyLocationButton={true}
                onRegionChangeComplete={onRegionChange}
                ref={mapRef}
            >
                {bars.map((bar, index) => (
                    <MarkerComponent
                        key={bar.id || index}
                        bar={bar}
                        onCalloutPressed={onCalloutPressed}
                    />
                ))}
            </MapView>
            <TouchableOpacity
                style={styles.locationButton}
                onPress={goToUserLocation}
            >
                <Text style={styles.locationButtonText}>📍</Text>
            </TouchableOpacity>
            {selectedBar !== null && (
                <BottomSheetModalComponent ref={bottomSheetRef} />
            )}
        </View>
    );
};

export default MapComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    map: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    locationButton: {
        position: "absolute",
        bottom: 25,
        right: 25,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    locationButtonText: {
        fontSize: 20,
    },
    searchContainer: {
        position: "absolute",
        top: 75,
        width: "90%",
        zIndex: 1,
    },
    searchInput: {
        height: 50,
        backgroundColor: "white",
        paddingHorizontal: 15,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        fontSize: 16,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
