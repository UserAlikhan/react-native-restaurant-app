import { StyleSheet, Text, TouchableOpacity } from "react-native"
import constants from "../../constants/constants" 

type Props = {
    name: string
}

const TabComponent = ({ name }: Props) => {

    return (
        <TouchableOpacity 
            style={styles.button}
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
        backgroundColor: '#fff', paddingHorizontal: 20 ,
        marginHorizontal: 5, alignItems: 'center',
        justifyContent: 'center'
    }, 
    text: {
        fontSize: 18, fontWeight: 'bold', 
        color: 'black', alignSelf: 'center',
    }
})