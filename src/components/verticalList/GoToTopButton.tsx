import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const GoToTopButton = () => {
    return (
        <TouchableOpacity style={styles.button}>
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
        backgroundColor: "#2e86c1",
        borderRadius: 55,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: '70%',
        alignSelf: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})