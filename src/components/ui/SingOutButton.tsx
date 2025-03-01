import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';


const SingOutButton = ({ handleSignOut }: { handleSignOut: () => void }) => {

    return (
        <TouchableOpacity style={styles.logoutButton} onPress={() => {
            handleSignOut()
        }}>
            <MaterialIcons name="logout" size={24} color="#fff" />
            <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    logoutButton: {
        backgroundColor: '#FF4444',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 8,
        marginHorizontal: 20,
        marginVertical: 20,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
})

export default SingOutButton