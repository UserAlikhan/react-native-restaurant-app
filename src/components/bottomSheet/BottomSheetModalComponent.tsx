import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet"
import { CircleX, Star } from "lucide-react-native"
import { forwardRef, useMemo, useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import RedirectToBarComponent from "./RedirectToBarComponent"
import HorizontalImageScroll from "../horizontallImageScroll/HorizontalImageScroll"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MainStackParamList } from "@app/types/navigation"
import { useAppDispatch, useAppSelector } from "@app/store/hooks"
import AsyncStorage from "@react-native-async-storage/async-storage"
import isTokenValid from "@app/helper/isTokenValid"
import { jwtDecode } from "jwt-decode"
import { addFavoriteBar, removeFavoriteBar } from "@app/store/slices/favoritesSlice"
import { addToFavorites } from "@app/apiRequests/favoritesCalls"
import signUpFirstAlert from "../alerts/signUpFirstAlert"
import barAlreadyInFavoritesAlert from "../alerts/barAlreadyInFavoritesAlert"

export type Ref = BottomSheetModal

const BottomSheetModalComponent = forwardRef<Ref>((props, ref) => {

    const [iconColor, setIconColor] = useState<string>("grey");
    const dispatch = useAppDispatch()
    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
    const { dismiss } = useBottomSheetModal();

    const router = useRoute()
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const { selectedBar } = useAppSelector(state => state.selectedBar);
    const { favoritesIds } = useAppSelector(state => state.favorites)
    if (!selectedBar) return;

    const handleAddToFavorites = async () => {
        const jwtToken = await AsyncStorage.getItem('jwtToken')
        if (jwtToken && isTokenValid(jwtToken)) {
            const decodedToken = jwtDecode(jwtToken)
            if (!favoritesIds.includes(selectedBar.id)) {
                dispatch(addFavoriteBar(selectedBar))
                try {
                    await addToFavorites(Number(decodedToken.sub), selectedBar.id, jwtToken)
                } catch (error) {
                    console.error(error)
                }
            } else {
                barAlreadyInFavoritesAlert()
            }
        } else {
            signUpFirstAlert({ handleSignUpPage: () => { navigation.replace('BottomNavigation', { screen: 'SignUp' } as never) } })
        }
    }

    const handleClickDetails = () => {
        navigation.navigate('Bar');
        dismiss();
    }

    const handleCloseBottomSheet = () => {
        dismiss();
        dispatch(removeFavoriteBar(selectedBar.id))
    }

    return (
        <BottomSheetModal
            ref={ref} index={0} snapPoints={snapPoints}
            handleIndicatorStyle={{ backgroundColor: "#000" }}
            backgroundStyle={{ backgroundColor: "#fff" }}
        >
            <CircleX
                color={iconColor} size={36}
                style={{ position: "absolute", top: 0, right: 15 }}
                onPress={() => {
                    handleCloseBottomSheet()
                }}
                onPressIn={() => setIconColor("red")}
                onPressOut={() => setIconColor("grey")}
            />
            <View style={styles.contentContainer}>
                <RedirectToBarComponent data={selectedBar} navigation={{ route: router, navigation }}>
                    <Text style={styles.containerHeadline}>{selectedBar.name}</Text>
                </RedirectToBarComponent>
                {/* images */}
                <HorizontalImageScroll images={selectedBar.images.map(image => image.url)} heightImage={200} />
                {/* information part */}
                <View style={{
                    width: '100%', height: 'auto', paddingHorizontal: 10,
                    marginTop: 25, flexDirection: 'row',
                    justifyContent: 'space-between'
                    // alignItems: 'center'
                }}>
                    <View style={{ flex: 2, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: "#000" }}>
                            {selectedBar.address}
                        </Text>
                        <Text style={{ fontSize: 18, color: "#616a6b" }}>
                            {selectedBar.state}  -  {selectedBar.city}
                        </Text>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: "#000" }}>
                            {/* Add rating in the future */}
                            Rating: 4.65{<Star color="yellow" fill="yellow" style={{ width: 12, height: 12 }} />}
                            /5{<Star color="yellow" fill="yellow" style={{ width: 12, height: 12 }} />}
                        </Text>
                        <Text style={{ fontSize: 18, color: "#616a6b", alignContent: 'flex-end' }}>
                            {selectedBar.zipCode}
                        </Text>
                    </View>
                </View>
                {/* Discription Part */}
                <View style={{
                    width: '100%', height: 'auto', paddingHorizontal: 10,
                    marginTop: 50
                }}>
                    <Text style={{ fontSize: 20, color: "#7f8c8d" }}>
                        {selectedBar.description}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => handleClickDetails()}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            Details
                        </Text>
                    </TouchableOpacity>
                    <Pressable
                        onPress={() => handleAddToFavorites()}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            Add to favorites
                        </Text>
                    </Pressable>
                </View>
            </View>
        </BottomSheetModal>
    )
})

export default BottomSheetModalComponent

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center'
    },
    containerHeadline: {
        fontSize: 23,
        marginBottom: 15,
        color: "#000",
        fontWeight: '600',
        padding: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
        paddingVertical: 140,
        paddingHorizontal: 40,
        width: '100%',
    },
    button: {
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#ff0000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 20,
        color: "#fff"
    }
})