import { StyleSheet, View } from "react-native"
import timePeriod from "../../../data/timePeriod"
import LiveImageScroll from "./LiveImageScroll"
import constants from "@app/constants/constants"
import HorizontalImageScroll from "@app/components/horizontallImageScroll/HorizontalImageScroll"

const ChooseTime = () => {
    const timesData = timePeriod

    return (
        <View style={styles.container}>
            <LiveImageScroll 
                images={timesData.onlyImages} 
                heightImage={constants.TIME_PERIOD_CONTAINER_HEIGHT}
                time={timesData.timePeriod}
            />
        </View>
    )
}

export default ChooseTime

const styles = StyleSheet.create({
    container: {
        height: constants.TIME_PERIOD_IMAGE_HEIGHT,
        width: '100%',
        marginTop: 10
    }
})