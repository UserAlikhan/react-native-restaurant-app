import { useRef, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import MarkerComponent from "@app/components/mapComponents/MarkerComponent";
import constants from "@app/constants/constants";
import BottomSheetModalComponent from "../bottomSheet/BottomSheetModalComponent";
import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { setSelectedBar } from "@app/store/slices/selectedBarSlice";
import { BarResponse } from "@app/types/apiResponseTypes";
import * as Location from 'expo-location';

const MapComponent = () => {

    const bottomSheetRef = useRef<BottomSheetModal | null>(null);
    const mapRef = useRef<MapView | null>(null);

    const { allBars } = useAppSelector(state => state.bars);
    const { selectedBar } = useAppSelector(state => state.selectedBar);

    const dispatch = useAppDispatch();

    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const onRegionChange = (region: Region) => {
        console.log(region)
    }

    const onCalloutPressed = (bar: BarResponse) => {
        dispatch(setSelectedBar(bar));
        bottomSheetRef.current?.present();
    }

    const checkStatus = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return false;
        }

        return true;
    }

    const goToUserLocation = async () => {
        if (!await checkStatus()) return;

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

    const handleSearch = () => {
        if (!searchQuery) return;

        const searchedBar = allBars.find(bar =>
            bar.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bar.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bar.zipCode.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (searchedBar) {
            mapRef.current?.animateCamera({
                center: {
                    latitude: searchedBar.latitude,
                    longitude: searchedBar.longitude,
                },
                zoom: 15,
            });

            dispatch(setSelectedBar(searchedBar));
            bottomSheetRef.current?.present();
        } else {
            Alert.alert("Not Found", "No bar matches your search criteria");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by name, address or zip code"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    onSubmitEditing={handleSearch}
                    returnKeyType="search"
                />
            </View>
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
                {allBars.map((bar, index) => {
                    if (!bar.latitude || !bar.longitude) {
                        console.log('Invalid coordinates for bar:', bar);
                        return null;
                    }
                    return (
                        <MarkerComponent
                            key={index} bar={bar}
                            onCalloutPressed={onCalloutPressed}
                        />
                    )
                })}
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
    )
}

export default MapComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    locationButton: {
        position: 'absolute',
        bottom: 25,
        right: 25,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 30,
        shadowColor: '#000',
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
        position: 'absolute',
        top: 75,
        width: '90%',
        zIndex: 1,
    },
    searchInput: {
        height: 50,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        borderRadius: 20,
        shadowColor: '#000',
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