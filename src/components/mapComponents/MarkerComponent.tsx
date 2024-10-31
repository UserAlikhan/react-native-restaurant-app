import { Bar } from "@app/types/types"
import { StyleSheet, Text, View } from "react-native"
import { Callout, Marker } from "react-native-maps"

type Props = {
    bar: Bar;
    onCalloutPressed: (bar: Bar) => void;
}

const MarkerComponent = ({ bar, onCalloutPressed }: Props) => {

    return (
        <>
            <Marker
                coordinate={bar.coordinates}
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