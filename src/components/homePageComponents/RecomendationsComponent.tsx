import { StyleSheet, View } from "react-native";
import RecomendationsTitle from "./RecomendationsTitle";
import constants from "@app/constants/constants";
import RecomendationsHorizontalScroll from "./RecomendationsHorizontalScroll";
import { useGetFromStoreOrRetrieveNearestBarsHook } from "@app/customHooks/useGetFromStoreOrRetrieveNearestBarsHook";
import { useGetFromStoreOrRetrieveAllBarsHook } from "@app/customHooks/useGetFromStoreOrRetrieveAllBarsHook";

type Props = {
    title: string;
};

const RecomendationsComponent = ({ title }: Props) => {
    const { nearestBars } = useGetFromStoreOrRetrieveNearestBarsHook();
    const { bars } = useGetFromStoreOrRetrieveAllBarsHook();

    return (
        <View style={styles.container}>
            {/* Title */}
            <View style={styles.titleContainer}>
                <RecomendationsTitle title={title} />
            </View>
            {/* Cards */}
            <View style={styles.cardsContainer}>
                {title === "Most Popular" || title === "In this area" ? (
                    <RecomendationsHorizontalScroll bars={bars} />
                ) : (
                    title === "Nearest to you" && (
                        <RecomendationsHorizontalScroll bars={nearestBars} />
                    )
                )}
            </View>
        </View>
    );
};

export default RecomendationsComponent;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        width: "100%",
        height:
            constants.INPUT_TEXT_HEIGHT +
            15 +
            constants.RECOMENDATIONS_CARD_HEIGHT,
        marginVertical: 10,
        gap: 15,
        zIndex: 1,
    },
    titleContainer: {
        height: constants.INPUT_TEXT_HEIGHT,
        width: "100%",
    },
    cardsContainer: {
        height: constants.RECOMENDATIONS_CARD_HEIGHT,
        width: "100%",
    },
});
