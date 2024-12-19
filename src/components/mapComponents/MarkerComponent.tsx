import { BarResponse } from "@app/types/apiResponseTypes";
import { StyleSheet, Text, View } from "react-native"
import { Callout, Marker } from "react-native-maps"

type Props = {
    bar: BarResponse;
    onCalloutPressed: (bar: BarResponse) => void;
}

const MarkerComponent = ({ bar, onCalloutPressed }: Props) => {

    return (
        <>
            <Marker
                coordinate={{ latitude: bar.longitude, longitude: bar.latitude }}
            >
                <Callout onPress={() => onCalloutPressed(bar)}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{bar.name}</Text>
                    </View>
                </Callout>
            </Marker>
        </>
    )
}

export default MarkerComponent

const styles = StyleSheet.create({
    textContainer: {
        padding: 10, width: 'auto'
    },
    text: {
        fontSize: 20,
        color: "#000"
    }
})