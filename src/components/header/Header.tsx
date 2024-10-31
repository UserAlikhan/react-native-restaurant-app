import { StyleSheet } from "react-native"
import Animated from "react-native-reanimated"
import constants from "../../constants/constants"
import HeaderContent from "./HeaderContent"

const Header = () => {

    return (
        <Animated.View style={styles.container}>
            <HeaderContent />
        </Animated.View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: constants.HEADER_HEIGHT,
        backgroundColor: '#fff',
    }
})