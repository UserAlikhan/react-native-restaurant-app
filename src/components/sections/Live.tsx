import { StyleSheet, View } from "react-native"
import constants from "../../constants/constants";
import VideoPlayer from "./components/VideoPlayer";
import LiveText from "./components/LiveText";
import ChooseTime from "./components/ChooseTime";

const Live = () => {

    return (
        <View style={styles.contentContainer}>
            {/* Text Container */}
            <LiveText/>
            {/* Video Container */}
            <VideoPlayer />
            {/* Choose time */}
            <ChooseTime />
        </View>
    )
}

export default Live

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        height: constants.SECTION_HEIGHT,
        borderWidth: 2  
    },
})