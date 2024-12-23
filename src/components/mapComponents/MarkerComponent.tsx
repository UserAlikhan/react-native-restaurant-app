import { BarResponse } from "@app/types/apiResponseTypes";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { Callout, Marker } from "react-native-maps"

type Props = {
    bar: BarResponse;
    onCalloutPressed: (bar: BarResponse) => void;
}

const MarkerComponent = ({ bar, onCalloutPressed }: Props) => {
    return (
        <Marker
            coordinate={{
                latitude: bar.latitude,
                longitude: bar.longitude
            }}
            title={bar.name}
            description={bar.address}
            onCalloutPress={() => onCalloutPressed(bar)}
        />
    );
};

export default MarkerComponent

const styles = StyleSheet.create({
    calloutContainer: {
        padding: 10,
        maxWidth: Dimensions.get('window').width * 0.7,
        minWidth: 200,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000",
        marginBottom: 4,
    },
    addressText: {
        fontSize: 14,
        color: "#666",
        marginBottom: 8,
    },
    imageScroller: {
        maxHeight: 100,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 8,
    }
})