import { Animated, StyleSheet, Text, View } from "react-native";
import { Dot } from "lucide-react-native";
import constants from "../../../constants/constants";
import { useEffect, useRef } from "react";
import { useAppSelector } from "@app/store/hooks";

const LiveText = () => {
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const { selectedBar } = useAppSelector((state) => state.selectedBar);

    if (!selectedBar) {
        return (
            <View>
                <Text style={styles.noData}>NO DATA</Text>
            </View>
        );
    }

    useEffect(() => {
        const fadeInOut = () => {
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]).start(() => fadeInOut());
        };

        fadeInOut();
    }, [fadeAnim]);

    return (
        <View style={styles.textContainer}>
            {/* Title */}
            <Text style={styles.text1}>Watch Live Feed Now</Text>
            <View style={styles.liveContainer}>
                {/* Dot Icon */}
                <View style={styles.dotContainer}>
                    <Animated.View
                        style={[styles.dotContent, { opacity: fadeAnim }]}
                    >
                        <Dot style={styles.dot} size={75} />
                    </Animated.View>
                </View>
                {/* Live Text */}
                <Text style={styles.live}>Live</Text>
            </View>
        </View>
    );
};

export default LiveText;

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text1: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
    },
    liveContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        maxHeight: constants.LIVE_MAX_HEIGHT,
        gap: 5,
    },
    live: {
        flex: 2,
        fontSize: 24,
        fontWeight: "bold",
        color: "#cb4335",
    },
    dotContainer: {
        flex: 2,
        alignItems: "flex-end",
        justifyContent: "center",
        maxHeight: constants.LIVE_MAX_HEIGHT,
    },
    dotContent: {
        maxHeight: constants.LIVE_MAX_HEIGHT,
        width: constants.LIVE_MAX_HEIGHT,
        justifyContent: "center",
    },
    dot: {
        color: "#cb4335",
        alignSelf: "flex-start",
    },
    noData: {
        fontSize: 24,
        color: "#fff",
    },
});
