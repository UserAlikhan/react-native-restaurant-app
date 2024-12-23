import { Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MainStackParamList } from "@app/types/navigation"

type Props = {
    title: string
}

const RecomendationsTitle = ({ title }: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <Pressable onPress={() => { navigation.navigate("AllBars") }}>
                <Text style={styles.seeAllText}>See all</Text>
            </Pressable>
        </View>
    )
}

export default RecomendationsTitle

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 24,
        color: "000",
        fontWeight: 'bold',
    },
    seeAllText: {
        fontSize: 18,
        color: "blue",
        fontWeight: 'bold',
    }
})