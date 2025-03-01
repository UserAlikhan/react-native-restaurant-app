import { addToFavorites, removeFromFavorites } from "@app/apiRequests/favoritesCalls"
import { BarResponse } from "@app/types/apiResponseTypes"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Star } from "lucide-react-native"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { jwtDecode } from 'jwt-decode'
import isTokenValid from "@app/helper/isTokenValid"
import { useAppDispatch, useAppSelector } from "@app/store/hooks"
import { addFavoriteBar, removeFavoriteBar } from "@app/store/slices/favoritesSlice"
import { useNavigation } from "@react-navigation/native"
import { MainStackParamList } from "@app/types/navigation"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import signUpFirstAlert from "../alerts/signUpFirstAlert"

type Props = {
    bar: BarResponse
}

const AllBarsCard = ({ bar }: Props) => {
    const dispatch = useAppDispatch()

    const { favoritesIds } = useAppSelector(state => state.favorites)

    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const handleAddToFavorites = async (bar_id: number) => {
        const jwtToken = await AsyncStorage.getItem('jwtToken')

        if (jwtToken && isTokenValid(jwtToken)) {
            const decodedToken = jwtDecode(jwtToken)

            if (!favoritesIds.includes(bar_id)) {
                console.log('Adding to favorites')
                dispatch(addFavoriteBar(bar))
                await addToFavorites(Number(decodedToken.sub), bar_id, jwtToken)
            } else {
                dispatch(removeFavoriteBar(bar_id))
                await removeFromFavorites(Number(decodedToken.sub), bar_id, jwtToken)
            }
        } else if (!jwtToken) {
            signUpFirstAlert({ handleSignUpPage: () => { navigation.replace('BottomNavigation', { screen: 'SignUp' } as never) } })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.barName}>{bar.name}</Text>
                <Image
                    source={{ uri: 'https://static.vecteezy.com/system/resources/previews/005/145/464/non_2x/bar-logo-lettering-design-template-vector.jpg' }}
                    style={styles.image}
                />
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.innerAddressContainer}>
                    <Text style={styles.locationText}>{bar.city},</Text>
                    <Text style={styles.locationText}>{bar.state},</Text>
                    <Text style={styles.locationText}>{bar.country}</Text>
                </View>
                <Text style={styles.addressText}>{bar.address}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>4.5</Text>
                    <Text style={styles.ratingLabel}>/5.0</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => handleAddToFavorites(bar.id)}>
                {favoritesIds.find(id => id === bar.id)
                    ? <Star size={24} color="#FFD700" fill={'gold'} />
                    : <Star size={24} color="#FFD700" fill={'white'} />
                }
            </TouchableOpacity>
        </View>
    )
}

export default AllBarsCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    leftContainer: {
        flex: 0.4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    rightContainer: {
        flex: 0.6,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: 16,
        gap: 1
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        resizeMode: 'cover',
    },
    barName: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    innerAddressContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    locationText: {
        fontSize: 14,
        color: '#666',
    },
    addressText: {
        fontSize: 14,
        color: '#444',
        marginVertical: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    ratingText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2196F3',
    },
    ratingLabel: {
        fontSize: 14,
        color: '#666',
        marginLeft: 2,
    }
})