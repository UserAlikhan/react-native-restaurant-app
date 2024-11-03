import { StyleSheet, Text, View } from "react-native"

type Props = {
    title: string
}

const RecomendationsTitle = ({ title }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default RecomendationsTitle

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        color: "000",
        fontWeight: 'bold',
    }
})