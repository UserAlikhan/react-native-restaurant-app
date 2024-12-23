import MapComponent from "@app/components/mapComponents/MapComponent";
import { StyleSheet, View } from "react-native";

export default function Explore() {

    return (
        <View style={styles.container}>
            <MapComponent />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});