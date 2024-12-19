import { useRef, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import MarkerComponent from "@app/components/mapComponents/MarkerComponent";
import constants from "@app/constants/constants";
import BottomSheetModalComponent from "../bottomSheet/BottomSheetModalComponent";
import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { setSelectedBar } from "@app/store/slices/selectedBarSlice";
import { BarResponse } from "@app/types/apiResponseTypes";

const MapComponent = () => {

    const bottomSheetRef = useRef<BottomSheetModal | null>(null);
    const mapRef = useRef<MapView | null>(null);

    const { allBars } = useAppSelector(state => state.bars);
    const { selectedBar } = useAppSelector(state => state.selectedBar);
    const dispatch = useAppDispatch();

    const onRegionChange = (region: Region) => {
        console.log(region)
    }

    const onCalloutPressed = (bar: BarResponse) => {
        dispatch(setSelectedBar(bar));
        bottomSheetRef.current?.present();
    }

    return (
        <>
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
                {allBars.map((bar, index) => (
                    <MarkerComponent
                        key={index} bar={bar}
                        onCalloutPressed={onCalloutPressed}
                    />
                ))}
            </MapView>

            {
                selectedBar !== null && (
                    <BottomSheetModalComponent ref={bottomSheetRef} />
                )
            }
        </>
    )
}

export default MapComponent

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});