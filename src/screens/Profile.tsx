import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import { useAuth, useUser } from "@clerk/clerk-expo"
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MainStackParamList } from "@app/types/navigation"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { clearFavorites } from "@app/store/slices/favoritesSlice"
import { useAppDispatch, useAppSelector } from "@app/store/hooks"
import FavoriteBarsCardForProfilePage from "@app/components/ui/favoriteBarsCardForProfilePage"
import checkJwtTokenAndRetrieveFavorites from "@app/helper/checkJwtTokenAndRetrieveFavorites"

const Profile = () => {

    const { signOut } = useAuth()
    const { user } = useUser();

    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>()

    const handleSignOut = async () => {
        await signOut();
        // Clear the storage after log out
        await AsyncStorage.clear()
        // Clear the favorites
        dispatch(clearFavorites())

        navigation.navigate("BottomNavigation")
    }

    const { favoritesBars } = useAppSelector(state => state.favorites)
    // useEffect(() => {
    //     checkJwtTokenAndRetrieveFavorites(dispatch)
    // }, [])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                {/* <Image
                    source={{ uri: 'https://via.placeholder.com/150' }}
                    style={styles.profileImage}
                /> */}
                <Text style={styles.name}>{user?.username}</Text>
                <Text style={styles.email}>{user?.emailAddresses[0].emailAddress}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>My Favorites</Text>
                {favoritesBars.map(bar => (
                    // Call favorite bar card
                    <FavoriteBarsCardForProfilePage key={bar.bar.id} bar={bar.bar} />
                ))}
            </View>

            <TouchableOpacity style={styles.logoutButton} onPress={() => {
                handleSignOut()
            }}>
                <MaterialIcons name="logout" size={24} color="#fff" />
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        marginTop: 70,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: '#666',
    },
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
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
});

export default Profile