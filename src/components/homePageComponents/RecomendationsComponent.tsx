import { StyleSheet, View } from "react-native"
import RecomendationsTitle from "./RecomendationsTitle"
import constants from "@app/constants/constants"
import RecomendationsHorizontalScroll from "./RecomendationsHorizontalScroll"
import { useAppSelector } from "@app/store/hooks"

type Props = {
    title: string;
}

const RecomendationsComponent = ({ title }: Props) => {

    const { nearestBars, allBars } = useAppSelector(state => state.bars)

    return (
        <View style={styles.container}>
            {/* Title */}
            <View style={styles.titleContainer}>
                <RecomendationsTitle title={title} />
            </View>
            {/* Cards */}
            <View style={styles.cardsContainer}>
                {title === "Most Popular" || title === "In this area" ?
                    <RecomendationsHorizontalScroll bars={allBars} />
                    : title === "Nearest to you"
                    && <RecomendationsHorizontalScroll bars={nearestBars} />
                }
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