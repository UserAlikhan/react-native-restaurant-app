import { StyleSheet, Text, TouchableOpacity } from "react-native"
import constants from "../../constants/constants" 

type Props = {
    isActive: boolean,
    name: string;
    index: number;
    handleTabPress: (index: number) => void;
}

const TabComponent = ({ isActive, name, index, handleTabPress }: Props) => {
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={() => handleTabPress(index)}
        >
            <Text style={[
                styles.text, 
                isActive ? styles.activeText : styles.inactiveText
            ]}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}

export default TabComponent

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20, 
        marginHorizontal: 5,
        alignItems: 'center', 
        justifyContent: 'center',
    }, 
    text: {
        fontSize: 18,
    },
    activeText: {
        color: 'red',
        fontWeight: 'bold',
    },
    inactiveText: {
        color: 'black',
        fontWeight: 'normal',
    }
})