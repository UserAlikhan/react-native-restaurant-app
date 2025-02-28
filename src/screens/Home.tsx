import { StyleSheet, View } from "react-native";
import HeaderTemplate from "../components/templates/HeaderTemplate";
import SearchComponent from "@app/components/homePageComponents/SearchComponent";
import RecomendationsComponent from "@app/components/homePageComponents/RecomendationsComponent";
import { useGetLocationHook } from "@app/customHooks/useGetLocationHook";
import { useUser } from "@clerk/clerk-expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logInUserCall } from "@app/apiRequests/userCalls";
import { useEffect } from "react";
import isTokenValid from "@app/helper/isTokenValid";
import { jwtDecode } from "jwt-decode";
import { getUserFavoriteBars, getUserFavoritesIds } from "@app/apiRequests/favoritesCalls";
import { useAppDispatch } from "@app/store/hooks";
import { setFavoritesIds, setFavoritesBars } from "@app/store/slices/favoritesSlice";

export default function Home() {
    const dispatch = useAppDispatch()
    const { location } = useGetLocationHook();
    const { user } = useUser()
    console.log('location ', location)
    // function to check if jwt token exists in async storage
    useEffect(() => {

        const checkJwtToken = async () => {
            const jwtToken = await AsyncStorage.getItem('jwtToken')

            if ((!jwtToken || !isTokenValid(jwtToken)) &&
                user?.emailAddresses[0]?.emailAddress &&
                user?.firstName &&
                user?.lastName) {
                const token = await logInUserCall({
                    email: user?.emailAddresses[0]?.emailAddress,
                    username: user?.firstName.toLowerCase() + "_" + user?.lastName.toLowerCase(),
                    password: "GOOGLE_ACCOUNT",
                })
                console.log('token ', token)
                if (token) {
                    await AsyncStorage.setItem('jwtToken', String(token.access_token))
                }
            } else if (jwtToken && isTokenValid(jwtToken)) {
                const decodedToken = jwtDecode(jwtToken)
                const favoritesIds = await getUserFavoritesIds(Number(decodedToken.sub), jwtToken)
                const favoritesBars = await getUserFavoriteBars(Number(decodedToken.sub), jwtToken)
                dispatch(setFavoritesIds(favoritesIds))
                dispatch(setFavoritesBars(favoritesBars))
            }
        }
        checkJwtToken()
    }, [])

    return (
        <HeaderTemplate>
            <View style={styles.container}>
                <View style={styles.searchComponent}>
                    <SearchComponent />
                </View>
                <RecomendationsComponent title={"Most Popular"} />
                {/* {location && (
                    <RecomendationsComponent title={"Nearest to you"} />
                )} */}
            </View>
        </HeaderTemplate>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    searchComponent: {
        marginVertical: 35,
        zIndex: 1,
    },
});
