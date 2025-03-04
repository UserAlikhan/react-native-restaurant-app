import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import constants from "../../constants/constants"
import { useNavigation } from '@react-navigation/native'
import { MainStackParamList } from "../../types/navigation"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

const HeaderContent = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Home")}>
            <View style={styles.main}>
                <View style={styles.content}>
                    <Image
                        source={require('../../images/Logo.png')}
                        style={styles.image}
                    />
                    <Text style={styles.text}>VibeView</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HeaderContent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'flex-start',
        paddingHorizontal: 25
    },
    main: {
        flex: 1,
        flexDirection: 'row',
        marginTop: constants.HEADER_MARGIN_TOP,
        gap: 15,
        alignItems: 'flex-end',
        paddingVertical: 8
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    text: {
        fontSize: 28,
        color: "black",
    },
    image: {
        width: 45, height: 45
    }
})