import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { useAuth, useUser } from "@clerk/clerk-expo"
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MainStackParamList } from "@app/types/navigation"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { clearFavorites } from "@app/store/slices/favoritesSlice"
import { useAppDispatch } from "@app/store/hooks"
import FavoriteBarsCardForProfilePage from "@app/components/ui/FavoriteBarsCardForProfilePage"
import useGetFavoriteBarsFromStoreOrRetrieveHook from "@app/customHooks/useGetFavoriteBarsFromStoreOrRetrieveHook"
import ProfileImage from "@app/components/ui/ProfileImage"
import SingOutButton from "@app/components/ui/SingOutButton"
import constants from "@app/constants/constants"
import { useState } from "react"

const Profile = () => {

    const { signOut } = useAuth()
    const { user } = useUser();

    const { isLoading, error, favoritesBars } = useGetFavoriteBarsFromStoreOrRetrieveHook()

    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>()

    const [showAllFavorites, setShowAllFavorites] = useState(false)
    const displayedFavorites = showAllFavorites ? favoritesBars : favoritesBars.slice(0, constants.SLICE_FAVORITES_NUMBER)

    const handleSignOut = async () => {
        await signOut();
        // Clear the storage after log out
        await AsyncStorage.clear()
        // Clear the favorites
        dispatch(clearFavorites())

        navigation.navigate("BottomNavigation")
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentWrapper}>
                <View style={styles.header}>
                    <ProfileImage size={constants.PROFILE_IMAGE_SIZE} />
                    <View style={styles.userInfo}>
                        <Text style={styles.name}>{user?.username}</Text>
                        <Text style={styles.email}>{user?.emailAddresses[0].emailAddress}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>My Favorites</Text>
                    {!isLoading && displayedFavorites.map(bar => (
                        // Call favorite bar card
                        <FavoriteBarsCardForProfilePage key={bar.bar.id} bar={bar.bar} />
                    ))}

                    {!isLoading && favoritesBars.length > constants.SLICE_FAVORITES_NUMBER && (
                        <TouchableOpacity style={styles.showAllButton} onPress={() => setShowAllFavorites(!showAllFavorites)}>
                            <Text style={styles.showAllText}>
                                {showAllFavorites ? "Show Less" : "Show All"}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
                {!showAllFavorites && <View style={styles.spacer} />}
                <SingOutButton handleSignOut={handleSignOut} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: '#fff',
    },
    contentWrapper: {
        minHeight: "100%",
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'column',
        marginTop: 75,
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    userInfo: {
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
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
    showAllButton: {
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    showAllText: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
    },
    spacer: {
        flex: 1,
    },
});

export default Profile