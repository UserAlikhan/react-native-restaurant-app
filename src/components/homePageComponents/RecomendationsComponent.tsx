import { StyleSheet, View } from "react-native"
import RecomendationsTitle from "./RecomendationsTitle"
import constants from "@app/constants/constants"
import RecomendationsHorizontalScroll from "./RecomendationsHorizontalScroll"

type Props = {
    title: string
}

const RecomendationsComponent = ({ title }: Props) => {
    
    return (
        <View style={styles.container}>
            {/* Title */}
            <View style={styles.titleContainer}>
                <RecomendationsTitle title={title}/>
            </View>
            {/* Cards */}
            <View style={styles.cardsContainer}>
                <RecomendationsHorizontalScroll />
            </View>
        </View>
    )
}

export default RecomendationsComponent

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        width: '100%',
        height: constants.INPUT_TEXT_HEIGHT + 15 + constants.RECOMENDATIONS_CARD_HEIGHT,
        marginVertical: 10,
        gap: 15
    },
    titleContainer: {
        height: constants.INPUT_TEXT_HEIGHT,
        width: '100%',
    },
    cardsContainer: {
        height: constants.RECOMENDATIONS_CARD_HEIGHT,
        width: '100%',
    },
})