import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { BarResponse } from "@app/types/apiResponseTypes"
import { Star } from "lucide-react-native"
import { useAppDispatch } from "@app/store/hooks"
import { removeFavoriteBar } from "@app/store/slices/favoritesSlice"
import { removeFromFavorites } from "@app/apiRequests/favoritesCalls"
import AsyncStorage from "@react-native-async-storage/async-storage"
import isTokenValid from "@app/helper/isTokenValid"
import { jwtDecode } from "jwt-decode"

type Props = {
    bar: BarResponse
}

const FavoriteBarsCardForProfilePage = ({ bar }: Props) => {

    const dispatch = useAppDispatch()

    const handleRemoveFromFavorites = async () => {
        const jwtToken = await AsyncStorage.getItem('jwtToken')
        if (!jwtToken || !isTokenValid(jwtToken)) return

        dispatch(removeFavoriteBar(bar.id))
        try {
            await removeFromFavorites(Number(jwtDecode(jwtToken).sub), bar.id, jwtToken)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View style={styles.favoriteItem}>
            <Image
                source={{ uri: 'https://static.vecteezy.com/system/resources/previews/005/145/464/non_2x/bar-logo-lettering-design-template-vector.jpg' }}
                style={styles.barImage}
            />
            <View style={styles.favoriteInfo}>
                <Text style={styles.barName}>{bar.name}</Text>
                <Text style={styles.cuisine}>{bar.state} • {bar.city}</Text>
            </View>
            <TouchableOpacity onPress={handleRemoveFromFavorites}>
                <Star size={24} color="#FFD700" fill="gold" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    favoriteItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 12,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    barImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    favoriteInfo: {
        flex: 1,
        marginLeft: 12,
    },
    barName: {
        fontSize: 16,
        fontWeight: '600',
    },
    cuisine: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});

export default FavoriteBarsCardForProfilePage;
