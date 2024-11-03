import constants from "@app/constants/constants"
import { ScrollView, StyleSheet, View } from "react-native"
import RecomendationsCard from "./RecomendationsCard"
import bars from "@app/data/bars"

const RecomendationsHorizontalScroll = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                scrollEventThrottle={16}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                decelerationRate={'fast'}
                contentContainerStyle={styles.scrollViewContainer}
            >
                {bars.map((bar, idx) => (
                    <RecomendationsCard key={idx} bar={bar} />
                ))}
            </ScrollView>
        </View>
    )
}

export default RecomendationsHorizontalScroll

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: constants.RECOMENDATIONS_CARD_HEIGHT,
    },
    scrollViewContainer: {
        flexGrow: 1,
        gap: 30
    }
})