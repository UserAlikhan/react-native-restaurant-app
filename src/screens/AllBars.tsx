import ArrowHeaderTemplate from "@app/components/templates/ArrowHeaderTemplate"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import AllBarsCard from "@app/components/ui/AllbarsCard"
import { useGetFromStoreOrRetrieveAllBarsHook } from "@app/customHooks/useGetFromStoreOrRetrieveAllBarsHook";
import useGetFavoriteBarsFromStoreOrRetrieveHook from "@app/customHooks/useGetFavoriteBarsFromStoreOrRetrieveHook";

const AllBars = () => {

    const { bars } = useGetFromStoreOrRetrieveAllBarsHook();
    useGetFavoriteBarsFromStoreOrRetrieveHook()

    return (
        <ArrowHeaderTemplate>
            <View style={styles.container}>
                <Text style={styles.title}>All Bars</Text>
                <View style={styles.cardsContainer}>
                    <ScrollView
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.scrollView}
                        decelerationRate={'fast'}
                    >
                        {bars.map(bar => (
                            <AllBarsCard key={bar.id} bar={bar} />
                        ))}
                    </ScrollView>
                </View>
            </View>
        </ArrowHeaderTemplate>
    )
}

export default AllBars

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8d8d8',
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 16,
        textAlign: 'center'
    },
    cardsContainer: {
        width: '100%',
        height: '100%'
    },
    scrollView: {
        flexGrow: 1,
        gap: 20,
        paddingBottom: 60
    }
})