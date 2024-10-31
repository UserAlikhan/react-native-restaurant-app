import BottomSheetModalComponent from "@app/components/bottomSheet/BottomSheetModalComponent";
import MarkerComponent from "@app/components/mapComponents/MarkerComponent";
import constants from "@app/constants/constants";
import bars from "@app/data/bars";
import { Bar } from "@app/types/types";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";

export default function Explore() {

    const bottomSheetRef = useRef<BottomSheetModal | null>(null);
    const mapRef = useRef<MapView | null>(null)
    const navigation = useNavigation()

    const [selectedBar, setSelectedBar] = useState<Bar | null>(null);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={focusMap}>
                    <View style={{ padding: 10 }}>
                        <Text>Focus</Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }, [])

    const focusMap = () => {
        mapRef.current?.animateCamera({ center: constants.MANHATTAN, zoom: 10 }, { duration: 3000 })
    };

    const onRegionChange = (region: Region) => {
        // console.log(region)
    }

    const onCalloutPressed = (bar: Bar) => {
        setSelectedBar(bar);
        bottomSheetRef.current?.present();
    }

    console.log("selectedBar ", selectedBar)

    return (
        <View style={styles.container}>
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
                    <MarkerComponent bar={bar} key={index} onCalloutPressed={onCalloutPressed} />
                ))}
            </MapView>

            {
                selectedBar !== null && (
                    <BottomSheetModalComponent ref={bottomSheetRef} {...selectedBar} />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});