import { StyleSheet, Text, View } from "react-native"
import { useRoute } from '@react-navigation/native'
import { Star } from "lucide-react-native";
import { BarScreenRouteProp } from "../../types/navigation";
import constants from "../../constants/constants";
import HorizontalImageScroll from "../horizontallImageScroll/HorizontalImageScroll";

const Info = () => {
    const route = useRoute<BarScreenRouteProp>();

    if (!route.params && !route) {
        return (
            <View>
                <Text style={styles.noData}>NO DATA</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* Title */}
            <View style={styles.titleContainer}>
                <Text style={styles.title} >{route.params.name}</Text>
            </View>
            {/* Images */}
            <HorizontalImageScroll heightImage={500} images={route.params.images} />
            {/* Basic Info */}
            <View style={styles.basicInfoContainer}>
                <View style={styles.basicInfoContent}>
                    <Text style={styles.info1}>
                        {route.params.address}
                    </Text>
                    <Text style={styles.info1}>
                        {route.params.state}  -  {route.params.city}
                    </Text>
                </View>
                <View style={styles.basicInfoContent}>
                    <Text style={styles.info2}>
                        Rating: {route.params.rating}{<Star color="yellow" fill="yellow" style={styles.star} />}
                        /5{<Star color="yellow" fill="yellow" style={styles.star} />}
                    </Text>
                    <Text style={styles.info2}>
                        {route.params.zipCode}
                    </Text>
                </View>
            </View>
            {/* Description */}
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    {route.params.description}
                </Text>
            </View>
        </View>
    )
}

export default Info

const styles = StyleSheet.create({
    container: {
        flex: 1, height: constants.SECTION_HEIGHT,
        borderWidth: 2, gap: 25
    },
    titleContainer: {
        marginTop: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 28, fontWeight: 'bold', color: "black"
    },
    basicInfoContainer: {
        paddingHorizontal: 20, flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    basicInfoContent: {
        flex: 2, flexDirection: 'column',
        alignItems: 'flex-start', justifyContent: 'center',
    },
    info1: {
        fontSize: 20, color: "#707b7c"
    },
    info2: {
        fontSize: 18, color: "#aab7b8", alignSelf: 'flex-end'
    },
    star: {
        width: 12, height: 12
    },
    descriptionContainer: {
        paddingHorizontal: 20
    },
    descriptionText: {
        fontSize: 20, color: "#2e4053"
    },
    noData: {
        fontSize: 24, color: "#fff"
    }
})