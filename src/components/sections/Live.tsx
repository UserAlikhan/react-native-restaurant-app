import { StyleSheet, View } from "react-native"
import constants from "../../constants/constants";
import VideoPlayer from "./components/VideoPlayer";
import LiveText from "./components/LiveText";
import ChooseTime from "./components/ChooseTime";
import RecomendationsComponent from "../homePageComponents/RecomendationsComponent";

const Live = () => {

    return (
        <View style={styles.contentContainer}>
            {/* Text Container */}
            <LiveText />
            {/* Video Container */}
            <VideoPlayer />
            {/* Choose time */}
            {/* <ChooseTime /> */}
            {/* Recommendations */}
            <RecomendationsComponent title={"In this area"} />
        </View>
    )
}

export default Live

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        height: constants.SECTION_HEIGHT,
    },
})