import { Image, StyleSheet, Text, View } from "react-native";
import constants from "../../../constants/constants";

type TimeProps = {
    startTime: string,
    endTime: string
}

type Props = {
    uri: any;
    time: TimeProps
}

const LiveImageComponent = ({ uri, time }: Props) => {
    if (!uri) {
        return;
    }

    return (
        <View style={styles.container}>
            <Image
                source={uri}
                style={styles.image}
                onError={(error) => {
                    console.error("Image load error:", error);
                }}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{time.startTime} - {time.endTime}</Text>
            </View>
        </View>
    )
}

export default LiveImageComponent

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: constants.TIME_PERIOD_TEXT_CONTAINER_HEIGHT,
    },
    image: {
        width: constants.TIME_PERIOD_IMAGE_HEIGHT,
        height: constants.TIME_PERIOD_IMAGE_HEIGHT,
        resizeMode: "cover",
        borderRadius: 5,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#000"
    }
})