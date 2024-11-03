import constants from "@app/constants/constants"
import { Search } from "lucide-react-native"
import { StyleSheet, TextInput, View } from "react-native"

const SearchComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    <Search style={styles.searchIcon} size={37} color={'#000'}/>
                </View>
                <TextInput 
                    style={styles.textInput} 
                    placeholderTextColor={"#ccc"} 
                    selectionColor={"#000"}
                    placeholder="Bars, City, Postal Code" 
                />
            </View>
        </View>
    )
}

export default SearchComponent

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        width: '100%',
        height: constants.INPUT_TEXT_HEIGHT + 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        width: '100%',
        borderRadius: 20,
        height: constants.INPUT_TEXT_HEIGHT,
        borderWidth: 1,
        gap: 10
    },
    textInput: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        width: '75%',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        borderRightWidth: 2,
    },
    searchIcon: {
        alignSelf: 'center',
    }
})