import constants from "@app/constants/constants"
import { Bar } from "@app/types/types"
import { Image, StyleSheet, Text, View } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MainStackParamList } from "@app/types/navigation"
import RedirectToBarComponent from "../bottomSheet/RedirectToBarComponent"

type Props = {
    bar: Bar
}

const RecomendationsCard = ({ bar }: Props) => {
    
    const router = useRoute()
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    return (
        <View style={styles.container}>
            {/* Image */}
            <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: bar.images[0] }}
                    style={styles.image}
                />
            </View>
            {/* Caption */}
            <View style={styles.textContainer}>
                <RedirectToBarComponent data={bar} navigation={{ route: router, navigation: navigation }}>
                    <Text style={styles.text}>{bar.name}</Text>
                </RedirectToBarComponent>
            </View>
        </View>
    )
}

export default RecomendationsCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: constants.windowParams.width * 0.75,
        height: constants.RECOMENDATIONS_CARD_HEIGHT,
        backgroundColor: "#fff",
        borderRadius: constants.CARD_BORDER_RADIUS
    },
    imageContainer: {
        width: '100%',
        height: constants.RECOMENDATIONS_CARD_HEIGHT * 0.75,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        borderTopLeftRadius: constants.CARD_BORDER_RADIUS,
        borderTopRightRadius: constants.CARD_BORDER_RADIUS,
    },
    textContainer: {
        flex: 1,
        width: '100%',
        height: constants.RECOMENDATIONS_CARD_HEIGHT * 0.25,
        borderTopWidth: 2,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    text: {
        fontSize: 24,
        color: "#000",
        fontWeight: 'bold',
    },
})