import { StyleSheet } from "react-native"
import Animated from "react-native-reanimated"
import constants from "../../constants/constants"
import ArrowHeaderContent from "./ArrowHeaderContent"

const ArrowHeader = () => {

    return (
        <Animated.View style={styles.container}>
            <ArrowHeaderContent />
        </Animated.View>
    )
}

export default ArrowHeader

const styles = StyleSheet.create({
    container: {
        height: constants.HEADER_HEIGHT,
        backgroundColor: '#fff',
    }
})