import { useCallback, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_DEFAULT, Region } from "react-native-maps";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import MarkerComponent from "@app/components/mapComponents/MarkerComponent";
import constants from "@app/constants/constants";
import BottomSheetModalComponent from "../bottomSheet/BottomSheetModalComponent";
import { useAppDispatch } from "@app/store/hooks";
import { setSelectedBar } from "@app/store/slices/selectedBarSlice";
import { BarResponse } from "@app/types/apiResponseTypes";
import * as Location from "expo-location";
import MapPageSearchComponent from "../searchField/MapPageSearchComponent";
import { useGetFromStoreOrRetrieveAllBarsHook } from "@app/customHooks/useGetFromStoreOrRetrieveAllBarsHook";
import { useGetLocationHook } from "@app/customHooks/useGetLocationHook";
import { setLocation } from "@app/store/slices/locationSlice";

const MapComponent = () => {

    const bottomSheetRef = useRef<BottomSheetModal | null>(null);
    const mapRef = useRef<MapView | null>(null);

    const { bars } = useGetFromStoreOrRetrieveAllBarsHook();
    const { location } = useGetLocationHook()
    const dispatch = useAppDispatch();

    const onRegionChange = (region: Region) => {
        console.log(region);
    };

    const onCalloutPressed = useCallback((bar: BarResponse) => {
        dispatch(setSelectedBar(bar));
        // Add a small delay to ensure the bottomSheet is ready
        setTimeout(() => {
            if (bottomSheetRef.current) {
                bottomSheetRef.current.present();
            }
        }, 100);
    }, [dispatch]);

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
            dispatch(setLocation(currentLocation));
        }
        if (!location) return;
        // Wait for the location to be set
        setTimeout(() => {
            mapRef.current?.getCamera().then((camera) => {
                mapRef.current?.animateCamera({
                    center: {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    },
                    zoom: 15,
                });
            });
        }, 100);
    };

    return (
        <View style={styles.container}>
            <MapPageSearchComponent
                bottomSheetRef={bottomSheetRef}
                mapRef={mapRef}
            />
            <MapView
                style={styles.map}
                provider={PROVIDER_DEFAULT}
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
            <BottomSheetModalComponent ref={bottomSheetRef} />
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
