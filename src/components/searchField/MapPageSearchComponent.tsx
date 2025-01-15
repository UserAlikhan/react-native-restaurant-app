import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { useRef, useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import MapView from "react-native-maps";
import { setSelectedBar } from "@app/store/slices/selectedBarSlice";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const MapPageSearchComponent = () => {
    const { allBars } = useAppSelector((state) => state.bars);

    const bottomSheetRef = useRef<BottomSheetModal | null>(null);
    const mapRef = useRef<MapView | null>(null);

    const dispatch = useAppDispatch();

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        if (!searchQuery) return;

        const searchedBar = allBars.find(
            (bar) =>
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
    };

    return (
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
    );
};

export default MapPageSearchComponent;

const styles = StyleSheet.create({
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
