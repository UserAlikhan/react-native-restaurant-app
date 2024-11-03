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
            style={[styles.button, isActive ? styles.isActiveBg : styles.notActiveBg]}
            onPress={() => handleTabPress(index)}
        >
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

export default TabComponent

const styles = StyleSheet.create({
    button: {
        height: '90%', width: 'auto', 
        borderWidth: 2, borderRadius: 55, 
        paddingHorizontal: 20, marginHorizontal: 5, 
        alignItems: 'center', justifyContent: 'center'
    }, 
    text: {
        fontSize: 18, fontWeight: 'bold', 
        color: 'black', alignSelf: 'center',
    },
    isActiveBg: {
        backgroundColor: 'red'
    },
    notActiveBg: {
        backgroundColor: '#fff'
    }
})