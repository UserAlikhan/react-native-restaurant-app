import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

type Props = {
    handleTabPress: (index: number) => void;
}

const GoToTopButton = ({ handleTabPress }: Props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => handleTabPress(0)}>
            <View style={{}}>
                <Text style={styles.text}>Go to the top</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoToTopButton

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: "#000",
        backgroundColor: "red",
        borderRadius: 55,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: '70%',
        alignSelf: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: '700',
        alignSelf: 'center',
        color: "#fff",
    }
})