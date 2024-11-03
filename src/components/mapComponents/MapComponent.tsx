import { useRef, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import bars from "../../data/bars"
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import MarkerComponent from "@app/components/mapComponents/MarkerComponent";
import { Bar } from "@app/types/types";
import constants from "@app/constants/constants";
import BottomSheetModalComponent from "../bottomSheet/BottomSheetModalComponent";

const MapComponent = () => {

    const bottomSheetRef = useRef<BottomSheetModal | null>(null);
    const mapRef = useRef<MapView | null>(null);

    const [selectedBar, setSelectedBar] = useState<Bar | null>(null);

    const onRegionChange = (region: Region) => {
        console.log(region)
    }

    const onCalloutPressed = (bar: Bar) => {
        setSelectedBar(bar);
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
                {bars.map((bar, index) => (
                    <MarkerComponent
                        key={index} bar={bar}
                        onCalloutPressed={onCalloutPressed}
                    />
                ))}
            </MapView>

            {
                selectedBar !== null && (
                    <BottomSheetModalComponent ref={bottomSheetRef} {...selectedBar} />
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